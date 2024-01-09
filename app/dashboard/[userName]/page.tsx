import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getUserBySessionToken } from '../../database/users';
import UploadForm from './UploadForm';

type Props = {
  params: {
    userName: string;
  };
};

export default async function UserDashboardPage({ params }: Props) {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
  // 1. Checking if the sessionToken cookie exists
  const cookieStore = cookies();
  const sessionToken = cookieStore.get('sessionToken');

  // 2. Get the current logged in user from the database using the sessionToken value
  const user =
    sessionToken && (await getUserBySessionToken(sessionToken.value));

  if (!sessionToken) {
    return redirect(`/login?returnTo=/login/${params.userName}`);
  }
  return (
    <div className="bg-custom-bg min-h-screen flex flex-col justify-center items-center space-y-6">
      <div className="text-center mb-4">
        <h1 className="font-bold text-black text-6xl leading-9 tracking-tight text-center mt-10">
          Welcome to your dashboard,{' '}
          {params.userName
            ? params.userName.charAt(0).toUpperCase() + params.userName.slice(1)
            : ''}
          !
        </h1>
        <h2 className="text-info text-center text-2xl mt-4">
          Ready to upload your stories? Let's get it started!{' '}
        </h2>
      </div>

      <UploadForm
        user={user}
        cloudName={cloudName}
        uploadPreset={uploadPreset}
      />
    </div>
  );
}
