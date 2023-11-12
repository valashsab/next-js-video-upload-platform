'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Video } from '../../../migrations/00002-createTableVideos';
import { UserVideosResponseBodyGet } from '../../api/videos/route';

export type VideosProps = {
  // added since in console undefined - trial 12/11/23
  id: number;
  userId: number;
  videos: Video[];
};

export default function VideosList(props: VideosProps) {
  // const [videos, setVideos] = useState<Video[]>([]);

  // useEffect(() => {
  //   const fetchVideos = async () => {
  //     try {
  //       const response = await fetch(`/api/videos?userId=${props.userId}`);

  //       if (response.ok) {
  //         const data: UserVideosResponseBodyGet = await response.json();

  //         setVideos((data as { videos: Video[] }).videos);
  //       } else {
  //         console.error(`Failed to fetch videos: ${response.statusText}`);
  //       }
  //     } catch (error) {
  //       console.error('Error fetching videos:', error);
  //     }
  //   };

  //   fetchVideos().catch((error) =>
  //     console.error('Error fetching videos:', error),
  //   );
  // }, [props.userId, props.videos]);

  // // added since in console undefined - trial 12/11/23

  // // DEFINED
  // console.log('UserId: ', props.userId);
  // // DEFINED
  // console.log('Videos:', props.videos);
  // // undefined
  // console.log('Id', props.id);
  // console.log('videos: ', videos);

  // const [data, setData] = useState<Video[]>([]);
  const [data, setData] = useState<UserVideosResponseBodyGet>({ videos: [] });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/videos?userId=${props.userId}`);
      console.log('Response: ', response);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result: UserVideosResponseBodyGet = await response.json();
      setData(result);
    };

    fetchData().catch((e) => {
      // handle the error as needed
      console.error('An error occurred while fetching the data: ', e);
    });
  }, [props.userId, props.videos]);
  console.log('VideoId: ', props.id);
  console.log('UserId: ', props.userId);
  console.log('Videos: ', props.videos);

  return (
    <div>
      <p>{data ? `Your data: ${data}` : 'Loading...'}</p>
      {props.videos.map((video) => (
        <div key={`video-${video.id}`}>
          {/* quick fix - ask for a sustainable solution */}
          <Link
            href="/videos/[userId]/[videoId]"
            as={`/videos/${props.userId}/${video.id}`}
          >
            {' '}
            {video.secureUrl}
          </Link>
          <br />
          <video controls width="300" height="200">
            <source src={video.secureUrl} type="video/mp4" />{' '}
            <track kind="captions" srcLang="en" label="English" />
            Your browser does not support the video tag.
          </video>
          <p>Title: {video.title}</p>
          <p>Description: {video.descriptionContent}</p>
          <br />
          <br />
        </div>
      ))}
    </div>
  );
}
