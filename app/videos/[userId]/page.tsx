import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { User } from '../../../migrations/00000-createTableUsers';
import { Video } from '../../../migrations/00002-createTableVideos';
import { getUserBySessionToken } from '../../database/users';
import { getVideosByUserId } from '../../database/videos';

export const metadata = {
  title: 'Memento video collection',
  description: 'Your own digital video album',
};

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
    <div className="bg-custom-bg min-h-screen flex flex-col  items-center">
      <h1 className="bg-custom-bg text-center text-6xl font-bold leading-9 tracking-tight text-white mt-10">
        Welcome to your video collection,{' '}
        {user?.userName
          ? user.userName.charAt(0).toUpperCase() + user.userName.slice(1)
          : ''}
        !
      </h1>
      {videos.length > 0 ? (
        <h2 className="text-info text-center text-2xl mt-4">
          Click on the thumbnail to watch the video{' '}
          <div className="flex justify-center items-center mt-4">
            <Image
              src="/images/press-button.png"
              width="50"
              height="25"
              alt="memento logo"
              priority
              style={{ transform: 'rotate(-180deg)' }}
              className="responsive"
            />
          </div>
        </h2>
      ) : (
        ''
      )}
      {videos.length > 0 ? (
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
                    alt="Thumbnail for the uploaded video"
                    width="450"
                    height="400"
                    className="rounded-lg responsive"
                  />{' '}
                  <div className="text-black mt-2"> {video.title} </div>
                </Link>

                <br />

                <br />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center mt-5 grid grid-rows-3 grid-cols-3 gap-10 gap-y-1 items-center">
          {' '}
          <Image
            src="/images/children-soccer.jpg"
            alt="Thumbnail for the uploaded video"
            width="200"
            height="150"
            className="rounded-lg responsive mt-20"
          />
          <Image
            src="/images/dad-child-bw.jpg"
            alt="Thumbnail for the uploaded video"
            width="200"
            height="150"
            className="rounded-lg responsive"
          />{' '}
          <Image
            src="/images/happy-friends.jpg"
            alt="Thumbnail for the uploaded video"
            width="200"
            height="150"
            className="rounded-lg responsive mt-20"
          />
          <div className="p-5 col-span-3">
            <p className="text-white text-xl whitespace-nowrap mb-2">
              You haven't uploaded any videos yet.
            </p>{' '}
            <div className="text-white underline text-xl font-semibold">
              <Link
                href="/dashboard/[userName]"
                as={`/dashboard/${user?.userName}`}
              >
                Go to Dashboard
              </Link>
            </div>
          </div>
          <Image
            src="/images/celebration.jpg"
            alt="Thumbnail for the uploaded video"
            width="200"
            height="150"
            className="rounded-lg responsive"
          />
          <Image
            src="/images/graduation.jpg"
            alt="Thumbnail for the uploaded video"
            width="200"
            height="150"
            className="rounded-lg responsive mt-20"
          />
          <Image
            src="/images/surf-droneview.jpg"
            alt="Thumbnail for the uploaded video"
            width="200"
            height="150"
            className="rounded-lg responsive"
          />
        </div>
      )}
    </div>
  );
}
