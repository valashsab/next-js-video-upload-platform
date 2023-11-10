'use client';
import { useEffect, useState } from 'react';
import { Video } from '../../../migrations/00002-createTableVideos';
import { getVideosByUserId } from '../../database/videos';

type HandleFetchDataProps = {
  userId: number;
};

const HandleFetchData: React.FC<HandleFetchDataProps> = ({ userId }) => {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    const fetchVideos = () => {
      getVideosByUserId(userId)
        .then((fetchedVideos) => {
          setVideos(fetchedVideos);
        })
        .catch((error) => {
          console.error('Error fetching videos:', error);
        });
    };

    fetchVideos();
  }, [userId]);

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
};

export default HandleFetchData;
