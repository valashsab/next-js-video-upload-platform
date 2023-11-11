'use client';
import { useEffect, useState } from 'react';
import { Video } from '../../../../migrations/00002-createTableVideos';
import { UserSingleVideosResponseBodyGet } from '../../../api/videos/[videoId]/route';

export type SingleVideosProps = {
  id: number;
  userId: number;
  singleVideos: Video[];
};

export default function VideosList(props: SingleVideosProps) {
  const [singleVideos, setSingleVideos] = useState<Video[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `/api/videos?userId=${props.userId}&videoId=${props.id}`,
        );

        if (response.ok) {
          const data: UserSingleVideosResponseBodyGet = await response.json();

          setSingleVideos((data as { singleVideos: Video[] }).singleVideos);
        } else {
          console.error(`Failed to fetch videos: ${response.statusText}`);
        }
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos().catch((error) =>
      console.error('Error fetching videos:', error),
    );
  }, [props.userId, props.id, props.singleVideos]);

  console.log('Video: ', singleVideos);
  console.log('VideoId: ', props.id);

  return (
    <div className="bg-custom-bg min-h-screen flex flex-col justify-center items-center space-y-6">
      {props.singleVideos.map((singleVideo) => (
        <div key={`video-${singleVideo.id}`}>
          <video controls width="300" height="200">
            <source src={singleVideo.secureUrl} type="video/mp4" />{' '}
            <track kind="captions" srcLang="en" label="English" />
            Your browser does not support the video tag.
          </video>
          <p>Title: {singleVideo.title}</p>
          <p>Description: {singleVideo.descriptionContent}</p>
        </div>
      ))}
    </div>
  );
}
