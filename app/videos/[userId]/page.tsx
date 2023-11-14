import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { User } from '../../../migrations/00000-createTableUsers';
import { Video } from '../../../migrations/00002-createTableVideos';
import { getUserBySessionToken } from '../../database/users';
import { getVideosByUserId } from '../../database/videos';

export type VideosProps = {
  videos: Video[];
};

export default async function VideosPage(props: VideosProps) {
  // 1. Checking if the sessionToken cookie exists
  const cookieStore = cookies();
  const sessionToken = cookieStore.get('sessionToken');
  //   // 2. Get the current logged-in user from the database using the sessionToken value
  const user: User | undefined =
    sessionToken && (await getUserBySessionToken(sessionToken.value));

  const videos: Video[] = await getVideosByUserId(user?.id as number);

  console.log(props);

  return (
    <div>
      <h1 className="bg-custom-bg text-center text-2xl font-bold leading-9 tracking-tight text-white">
        Welcome to your video collection,{' '}
        {user?.userName
          ? user.userName.charAt(0).toUpperCase() + user.userName.slice(1)
          : ''}
        !
      </h1>
      {/* <VideosList id={props.id} userId={user?.id as number} videos={videos} /> */}
      {videos.map((video) => (
        <div key={`video-${video.id}`}>
          <Link
            href="/videos/[userId]/[videoId]"
            as={`/videos/${video.userId}/${video.id}`}
          >
            <Image
              src={video.secureUrl.replace(/\.\w+$/, '.jpg')}
              alt="Thumbnail for video"
              width="350"
              height="300"
            />{' '}
          </Link>
          {/* <Link
            href="/videos/[userId]/[videoId]"
            as={`/videos/${video.userId}/${video.id}`}
          >
            {' '}
            {video.title}
          </Link> */}
          <br />
          <br />
        </div>
      ))}
    </div>
  );
}
