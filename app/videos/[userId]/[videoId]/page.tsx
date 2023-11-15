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
      <h1 className="bg-custom-bg text-center text-2xl font-bold leading-9 tracking-tight text-white">
        Relive your memories,{' '}
        {user?.userName
          ? user.userName.charAt(0).toUpperCase() + user.userName.slice(1)
          : ''}
        !
      </h1>

      <video controls width="300" height="200">
        <source src={singleVideos.secureUrl} type="video/mp4" />{' '}
        <track kind="captions" srcLang="en" label="English" />
        Your browser does not support the video tag.
      </video>
      {singleVideos.title}
      <br />
      {singleVideos.descriptionContent}
      <br />
      <br />

      {/* <SingleVideosList /> */}
      <DeleteSingleVideo
      // videoId={props.params.videoId}
      // userId={props.params.userId}
      // singleVideos={props.singleVideos}
      />
    </div>
  );
}
