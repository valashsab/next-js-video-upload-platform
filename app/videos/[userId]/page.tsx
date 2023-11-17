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
    <div className="bg-custom-bg">
      <h1 className="bg-custom-bg text-center text-2xl font-bold leading-9 tracking-tight text-white">
        Welcome to your video collection,{' '}
        {user?.userName
          ? user.userName.charAt(0).toUpperCase() + user.userName.slice(1)
          : ''}
        !
      </h1>
      <h2 className="text-black text-center">
        Click on the thumbnail to watch the video
      </h2>

      <div className="flex justify-center items-center h-full mt-20">
        <div className="grid grid-cols-3 gap-4 w-50%">
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
                  className="rounded-lg"
                />{' '}
                <div className="text-black"> {video.title} </div>
              </Link>

              <br />
              <br />
            </div>
          ))}
        </div>
        h
      </div>
    </div>
  );
}
