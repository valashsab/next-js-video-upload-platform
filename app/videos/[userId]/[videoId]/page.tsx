import { cookies } from 'next/headers';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { User } from '../../../../migrations/00000-createTableUsers';
import { Video } from '../../../../migrations/00002-createTableVideos';
import { getUserBySessionToken } from '../../../database/users';
import { getSingleVideoByUserIdVideoId } from '../../../database/videos';
import DeleteSingleVideo from './DeleteSingleVideo';

export const metadata = {
  title: 'Memento video',
  description: 'Relive, rewatch and share your memories',
};

export type SingleVideosProps = {
  params: {
    videoId: number;
    userId: number;
  };
  singleVideos: Video[] | undefined;
};

export default async function SingleVideosPage(props: SingleVideosProps) {
  // 1. Checking if the sessionToken cookie exists
  const cookieStore = cookies();
  const sessionToken = cookieStore.get('sessionToken');
  //   // 2. Get the current logged-in user from the database using the sessionToken value
  const user: User | undefined =
    sessionToken && (await getUserBySessionToken(sessionToken.value));

  const singleVideos = await getSingleVideoByUserIdVideoId(
    props.params.videoId,
    props.params.userId,
  );
  if (!singleVideos) {
    return notFound();
  }

  // const deletedVideo = await deleteSingleVideoByUserIdVideoId(
  //   props.params.videoId,
  //   props.params.userId,
  // );

  console.log('Props: ', props);
  // DEFINED
  console.log('VideoId: ', props.params.videoId);
  // DEFINED
  console.log('UserId ', props.params.userId);

  return (
    <div className="flex flex-col items-center justify-center bg-custom-bg">
      {' '}
      <h1 className="text-center font-bold leading-9 tracking-tight text-white text-6xl mt-10">
        Relive your memories,{' '}
        {user?.userName
          ? user.userName.charAt(0).toUpperCase() + user.userName.slice(1)
          : ''}
        !
      </h1>
      <h2 className="text-info text-center text-2xl mt-4">
        Sit back, relax. Action!{' '}
        <div className="flex justify-center items-center mt-4">
          <Image
            src="/images/video-icon.png"
            width="50"
            height="25"
            alt="memento logo"
            priority
            className="responsive"
          />
        </div>
      </h2>
      <div className="hero min-h-screen bg-custom-bg">
        <div className="hero-content text-center">
          <div className="rounded-lg overflow-hidden">
            <video
              controls
              width="820"
              height="740"
              className="mx-auto max-w-full"
            >
              <source src={singleVideos.secureUrl} type="video/mp4" />{' '}
              <track kind="captions" srcLang="en" label="English" />
              Your browser does not support the video tag.
            </video>
            <div className="text-center">
              {' '}
              <h1 className="text-2xl text-black font-bold mt-4">
                {singleVideos.title}
              </h1>
              <p className="py-2 text-black">
                {' '}
                {singleVideos.descriptionContent}
              </p>
              {/* functionality in the progress */}
              <DeleteSingleVideo /> {/* future functionality  */}
              <button className="btn btn-primary mt-2">Edit</button>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
