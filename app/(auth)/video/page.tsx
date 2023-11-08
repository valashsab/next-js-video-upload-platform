// type Props = {
//   params: { userName: string };
// };
import { cookies } from 'next/headers';
import { getUserBySessionToken } from '../../database/users';

// export default function UsersVideosPage({ params }: Props) {
export default async function UsersVideosPage() {
  // 1. Checking if the sessionToken cookie exists
  const cookieStore = cookies();
  const sessionToken = cookieStore.get('sessionToken');

  // 2. Get the current logged in user from the database using the sessionToken value
  const user =
    sessionToken && (await getUserBySessionToken(sessionToken.value));

  return (
    // <div className="bg-gradient-to-r from-red-300 to-gray-700 min-h-screen flex flex-col justify-center items-center space-y-6">

    <div className="bg-custom-bg min-h-screen flex flex-col justify-center items-center space-y-6">
      <h1 className="font-bold text-black">
        Welcome to your video collection
        {/* {user.userName.charAt(0).toUpperCase() + user.userName.slice(1)}! */}
        ,{' '}
        {user
          ? user.userName.charAt(0).toUpperCase() + user.userName.slice(1)
          : ''}
        !
        <br /> <br />
        <br />
        <ul>
          <li>
            <iframe
              title="beach"
              width="560"
              height="315"
              src="https://res.cloudinary.com/dybl0vlsh/video/upload/v1698858264/zieqjad5qzp0usg2ywpg

              .mp4"
              frameBorder={0}
              // frameBorder={0 as any}
              allowFullScreen
              sandbox="allow-same-origin"
            />
          </li>
          <li>PLACEHOLDER title</li>
          <li>PLACEHOLDER description</li>
        </ul>
      </h1>
    </div>
  );
}
