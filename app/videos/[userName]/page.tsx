import { cookies } from 'next/headers';
import { User } from '../../../migrations/00000-createTableUsers';
import { Video } from '../../../migrations/00002-createTableVideos';
import { getUserBySessionToken } from '../../database/users';
import { getVideosByUserId } from '../../database/videos';
import VideoList from './VideoList';

export default async function VideosPage() {
  // 1. Checking if the sessionToken cookie exists
  const cookieStore = cookies();
  const sessionToken = cookieStore.get('sessionToken');
  //   // 2. Get the current logged-in user from the database using the sessionToken value
  const user: User | undefined =
    sessionToken && (await getUserBySessionToken(sessionToken.value));

  const videos: Video[] = await getVideosByUserId(user?.id as number);

  return (
    <div>
      <h1 className="text-center text-2xl font-bold leading-9 tracking-tight text-white">
        Welcome to your video collection,{' '}
        {user?.userName
          ? user.userName.charAt(0).toUpperCase() + user.userName.slice(1)
          : ''}
        !
      </h1>
      <VideoList userId={user?.id || 0} videos={videos} />
    </div>
  );
}

// import { GetServerSideProps } from 'next';
// import { cookies } from 'next/headers';
// import { User } from '../../../migrations/00000-createTableUsers';
// import { Video } from '../../../migrations/00002-createTableVideos';
// import { getUserBySessionToken } from '../../database/users';
// import { getVideosByUserId } from '../../database/videos';

// type VideosPageProps = {
//   user: User | undefined;
//   videos: Video[]; // Assuming Video is a defined type in your code
// };

// export default function VideosPage(props: VideosPageProps) {
//   const { user, videos } = props;

//   return (
//     <div>
//       <h1 className="text-center text-2xl font-bold leading-9 tracking-tight text-white">
//         Welcome to your video collection,{' '}
//         {user?.userName
//           ? user.userName.charAt(0).toUpperCase() + user.userName.slice(1)
//           : ''}
//         !
//       </h1>
//       <div>
//         {videos.map((video) => (
//           <div key={`video-${video.id}`}>
//             <div>{video.secureUrl}</div>
//             <p>Title: {video.title}</p>
//             <p>Description: {video.descriptionContent}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export const getServerSideProps: GetServerSideProps<VideosPageProps> = async (
//   context,
// ) => {
//   // 1. Checking if the sessionToken cookie exists
//   const cookieStore = cookies(context.req.headers.cookie);
//   const sessionToken = cookieStore.get('sessionToken');

//   // 2. Get the current logged-in user from the database using the sessionToken value
//   const user: User | undefined =
//     sessionToken && (await getUserBySessionToken(sessionToken.value));

//   // 3. Fetch videos using the user ID
//   const videos = await getVideosByUserId(user?.id || 0);

//   // 4. Pass the user and videos as props to the page component
//   return {
//     props: {
//       user,
//       videos,
//     },
//   };
// };
