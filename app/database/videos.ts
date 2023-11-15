import { cache } from 'react';
import { Video } from '../../migrations/00002-createTableVideos';
import { sql } from '../database/connect';

export const createVideo = cache(
  async (
    secureUrl: string,
    publicId: string,
    title: string,
    descriptionContent: string,
    userId: number,
  ) => {
    const [video] = await sql<Video[]>`
      INSERT INTO
        videos (
          secure_url,
          public_id,
          title,
          description_content,
          user_id
        )
      VALUES
        (
          ${secureUrl},
          ${publicId},
          ${title},
          ${descriptionContent},
          ${userId}
        ) RETURNING *
    `;
    return video;
  },
);

export const getVideosByUserId = cache(async (userId: number) => {
  const videos = await sql<Video[]>`
    SELECT
      *
    FROM
      videos
    WHERE
      user_id = ${userId}
  `;
  return videos;
});

// obsolet??
// export const getSingleVideoByUserId = cache(
//   // async (id: number, userId: number) => {
//   async (userId: number) => {
//     const singleVideos = await sql<Video[]>`
//       SELECT
//         *
//       FROM
//         videos
//       WHERE
//         user_id = ${userId}
//     `;
//     return singleVideos;
//   },
// );

export const getSingleVideoByUserIdVideoId = cache(
  async (id: number, userId: number) => {
    const [singleVideo] = await sql<Video[]>`
      SELECT
        *
      FROM
        videos
      WHERE
        id = ${id}
        AND user_id = ${userId}
    `;
    return singleVideo;
  },
);

export const deleteSingleVideoByUserIdVideoId = cache(
  async (id: number, userId: number) => {
    const [singleVideo] = await sql<Video[]>`
      DELETE FROM videos
      WHERE
        id = ${id}
        AND user_id = ${userId} RETURNING *
    `;
    return singleVideo;
  },
);
