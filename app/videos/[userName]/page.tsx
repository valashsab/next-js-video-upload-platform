import { cookies } from 'next/headers';
import { User } from '../../../migrations/00000-createTableUsers';
import { getUserBySessionToken } from '../../database/users';

export default async function UsersVideosPage() {
  // 1. Checking if the sessionToken cookie exists
  const cookieStore = cookies();
  const sessionToken = cookieStore.get('sessionToken');

  // 2. Get the current logged in user from the database using the sessionToken value
  const user: User | undefined =
    sessionToken && (await getUserBySessionToken(sessionToken.value));

  return (
    <div className="bg-custom-bg min-h-screen">
      <h1 className=" text-center text-2xl font-bold leading-9 tracking-tight text-white">
        Welcome to your video collection,{' '}
        {user?.userName
          ? user.userName.charAt(0).toUpperCase() + user.userName.slice(1)
          : ''}
        !
      </h1>
    </div>
  );
}
