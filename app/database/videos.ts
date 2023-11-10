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
      videos.secure_url,
      videos.public_id,
      videos.title,
      videos.description
    FROM
      videos
      INNER JOIN users ON (
        videos.user_id = users.user_id
        WHERE
          users.user_id = ${userId}
      )
  `;
  return videos;
});
