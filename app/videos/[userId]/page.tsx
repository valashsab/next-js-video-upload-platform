import { cookies } from 'next/headers';
import { User } from '../../../migrations/00000-createTableUsers';
import { Video } from '../../../migrations/00002-createTableVideos';
import { getUserBySessionToken } from '../../database/users';
import { getVideosByUserId } from '../../database/videos';
import VideosList, { VideosProps } from './VideosList';

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
      {/* 12.11.23 */}
      <VideosList id={props.id} userId={user?.id as number} videos={videos} />
    </div>
  );
}
