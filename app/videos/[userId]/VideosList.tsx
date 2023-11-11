'use client';
import { useEffect, useState } from 'react';
import { Video } from '../../../migrations/00002-createTableVideos';
import { UserVideosResponseBodyGet } from '../../api/videos/route';

type VideosListProps = {
  userId: number;
  videos: Video[];
};

// export default function VideoList(props: VideosListProps) {
//   const [videos, setVideos] = useState<Video[]>([]);
//   const [errors, setErrors] = useState<{ message: string }[]>([]);

// useEffect(() => {
//   const fetchVideos = () => {
//     fetch(`/api/videos?userId=${props.userId}`)
//       .then((response) => {
//         console.log('Response: ', response);
//         if (!response.ok) {
//           throw new Error(`Failed to fetch videos: ${response.statusText}`);
//         }
//         return response.json();
//       })
//       .then((videosData) => {
//         console.log('Received videos data:', videosData);
//         setVideos(videosData);
//       })
//       .catch((error) => {
//         console.error('Error fetching videos:', error);
//       });
//   };

//   fetchVideos();
// }, [props.userId, props.videos]);

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

// 11.11.23 incomplete trial
export default function VideosList(props: VideosListProps) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(`/api/videos?userId=${props.userId}`);

        if (response.ok) {
          const data: UserVideosResponseBodyGet = await response.json();
          // setVideos(data.videos);
          setVideos((data as { videos: Video[] }).videos || []);
        } else {
          console.error(`Failed to fetch videos: ${response.statusText}`);
        }
      } catch (error) {
        // Handle network errors
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, [props.userId, props.videos]);

  return (
    <div>
      {props.videos.map((video) => (
        <div key={`video-${video.id}`}>
          <video controls width="300" height="200">
            <source src={video.secureUrl} type="video/mp4" />{' '}
            <track kind="captions" srcLang="en" label="English" />
            Your browser does not support the video tag.
          </video>
          <p>Title: {video.title}</p>
          <p>Description: {video.descriptionContent}</p>
        </div>
      ))}
    </div>
  );
}
