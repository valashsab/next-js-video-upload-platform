// 'use client';
// import { useEffect, useState } from 'react';
// import { Video } from '../../../migrations/00002-createTableVideos';
// import { getVideosByUserId } from '../../database/videos';

// type VideoListProps = {
//   userId: number;
//   // videos: Video[];
// };

// export default function VideoList(props: VideoListProps) {
//   const [videos, setVideos] = useState<Video[]>([]);

//   useEffect(() => {
//     const fetchVideos = () => {
//       // getVideosByUserId(props.userId)
//       //   .then((videosData) => {
//           setVideos(videosData);
//         })
//         .catch((error) => {
//           console.error('Error fetching videos:', error);
//         });
//     };

//     fetchVideos();
//   }, [props.userId]);

//   return (
//     <div>
//       {videos.map((video) => (
//         <div key={`video-${video.id}`}>
//           <div>{video.secureUrl}</div>
//           <p>Title: {video.title}</p>
//           <p>Description: {video.descriptionContent}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

'use client';
import { useEffect, useState } from 'react';
import { Video } from '../../../migrations/00002-createTableVideos';

type VideoListProps = {
  userId: number;
  videos: Video[];
};

export default function VideoList(props: VideoListProps) {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    const fetchVideos = () => {
      fetch(`/api/dashboard?userId=${props.userId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Failed to fetch videos: ${response.statusText}`);
          }
          return response.json();
        })
        .then((videosData) => {
          setVideos(videosData);
        })
        .catch((error) => {
          console.error('Error fetching videos:', error);
        });
    };

    fetchVideos();
  }, [props.userId, props.videos]);

  return (
    <div>
      {videos.map((video) => (
        <div key={`video-${video.id}`}>
          <div>{video.secureUrl}</div>
          <p>Title: {video.title}</p>
          <p>Description: {video.descriptionContent}</p>
        </div>
      ))}
    </div>
  );
}
