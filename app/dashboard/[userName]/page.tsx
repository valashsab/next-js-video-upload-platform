import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getUserBySessionToken } from '../../database/users';
import DiffComp from './DiffComp';
import UploadForm from './UploadForm';

type Props = {
  params: {
    userName: string;
  };
};

export default async function UserDashboardPage({ params }: Props) {
  // 1. Checking if the sessionToken cookie exists
  const cookieStore = cookies();
  const sessionToken = cookieStore.get('sessionToken');

  // 2. Get the current logged in user from the database using the sessionToken value
  const user =
    sessionToken && (await getUserBySessionToken(sessionToken.value));

  // added 14.11.23
  if (!sessionToken) {
    return redirect(`/login?returnTo=/login/${params.userName}`);
  }
  return (
    <div className="bg-custom-bg min-h-screen flex flex-col justify-center items-center space-y-6">
      <DiffComp />
      <div className="text-center mb-4">
        <h1 className="font-bold text-black">
          Welcome to your dashboard,{' '}
          {params.userName
            ? params.userName.charAt(0).toUpperCase() + params.userName.slice(1)
            : ''}
          !
        </h1>
        <p className="text-black">
          Ready to upload your memories? Let's get it started!{' '}
        </p>
        D
      </div>
      <UploadForm user={user} />
    </div>
  );
}
