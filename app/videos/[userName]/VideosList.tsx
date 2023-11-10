'use client';
import { useEffect, useState } from 'react';
import { Video } from '../../../migrations/00002-createTableVideos';

type VideosListProps = {
  userId: number;
  videos: Video[];
};

export default function VideoList(props: VideosListProps) {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    const fetchVideos = () => {
      fetch(`/api/videos?userId=${props.userId}`)
        .then((response) => {
          console.log('Response: ', response);
          if (!response.ok) {
            throw new Error(`Failed to fetch videos: ${response.statusText}`);
          }
          return response.json();
        })
        .then((videosData) => {
          console.log('Received videos data:', videosData);
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
