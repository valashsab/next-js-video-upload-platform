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
