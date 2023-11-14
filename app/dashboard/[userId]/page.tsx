import { cookies } from 'next/headers';
import { User } from '../../../migrations/00000-createTableUsers';
import { getUserBySessionToken } from '../../database/users';
import UploadForm from './UploadForm';

export default async function UserDashboardPage() {
  // 1. Checking if the sessionToken cookie exists
  const cookieStore = cookies();
  const sessionToken = cookieStore.get('sessionToken');

  // 2. Get the current logged in user from the database using the sessionToken value
  const user: User | undefined =
    sessionToken && (await getUserBySessionToken(sessionToken.value));

  return (
    <div className="bg-custom-bg min-h-screen flex flex-col justify-center items-center space-y-6">
      <div className="text-center mb-4">
        <h1 className="font-bold text-black">
          Welcome to your dashboard,{' '}
          {user?.userName
            ? user.userName.charAt(0).toUpperCase() + user.userName.slice(1)
            : ''}
          !
        </h1>
        <p className="text-black">
          Ready to upload your memories? Let's get it started!{' '}
        </p>
      </div>
      <UploadForm user={user} />
    </div>
  );
}
