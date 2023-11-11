import { cookies } from 'next/headers';
import { User } from '../../../../migrations/00000-createTableUsers';
import { Video } from '../../../../migrations/00002-createTableVideos';
import { getUserBySessionToken } from '../../../database/users';
import { getSingleVideoByUserId } from '../../../database/videos';
import SingleVideosList, { SingleVideosProps } from './SingleVideosList';

export default async function SingleVideosPage(props: SingleVideosProps) {
  // 1. Checking if the sessionToken cookie exists
  const cookieStore = cookies();
  const sessionToken = cookieStore.get('sessionToken');
  //   // 2. Get the current logged-in user from the database using the sessionToken value
  const user: User | undefined =
    sessionToken && (await getUserBySessionToken(sessionToken.value));

  const { id } = props;

  const singleVideos: Video[] = await getSingleVideoByUserId(
    id,
    user?.id as number,
  );

  console.log('Props: ', props);
  console.log('Id: ', id);

  return (
    <div>
      <h1 className="bg-custom-bg text-center text-2xl font-bold leading-9 tracking-tight text-white">
        Relive your memories,{' '}
        {user?.userName
          ? user.userName.charAt(0).toUpperCase() + user.userName.slice(1)
          : ''}
        !
      </h1>
      <SingleVideosList
        id={id}
        userId={user?.id as number}
        singleVideos={singleVideos}
      />
    </div>
  );
}
