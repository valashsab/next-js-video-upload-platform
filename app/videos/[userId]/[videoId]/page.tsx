import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';
import { User } from '../../../../migrations/00000-createTableUsers';
import { Video } from '../../../../migrations/00002-createTableVideos';
import { getUserBySessionToken } from '../../../database/users';
import { getSingleVideoByUserIdVideoId } from '../../../database/videos';
import DeleteSingleVideo from './DeleteSingleVideo';

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
    <div>
      <h1 className="bg-custom-bg text-center text-2xl font-bold leading-9 tracking-tight text-black">
        Relive your memories,{' '}
        {user?.userName
          ? user.userName.charAt(0).toUpperCase() + user.userName.slice(1)
          : ''}
        !
      </h1>

      <div className="hero min-h-screen bg-custom-bg">
        <div className="hero-content text-center">
          {/* <div className="max-w-md"> */}
          <video controls width="820" height="740">
            <source src={singleVideos.secureUrl} type="video/mp4" />{' '}
            <track kind="captions" srcLang="en" label="English" />
            Your browser does not support the video tag.
          </video>
          <div>
            <h1 className="text-5xl text-black font-bold">
              {singleVideos.title}
            </h1>
            <p className="py-6 text-black">
              {' '}
              {singleVideos.descriptionContent}
            </p>
            <DeleteSingleVideo />{' '}
            <button className="btn btn-primary mt-4">Edit</button>
            {/* </div> */}
          </div>
        </div>
      </div>

      <div className="hero min-h-screen bg-custom-bg">
        <div className="hero-content flex-col lg:flex-row">
          <video controls width="620" height="540">
            <source src={singleVideos.secureUrl} type="video/mp4" />{' '}
            <track kind="captions" srcLang="en" label="English" />
            Your browser does not support the video tag.
          </video>
          <div>
            <h1 className="text-5xl text-black font-bold">
              {' '}
              {singleVideos.descriptionContent}
            </h1>
            <div className="text-black">{singleVideos.title}</div>
            <br /> <DeleteSingleVideo />
          </div>
        </div>
      </div>
    </div>
  );
}
