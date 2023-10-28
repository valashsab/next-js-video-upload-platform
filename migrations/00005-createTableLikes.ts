import { Sql } from 'postgres';

export type Like = {
  id: number;
  userId: number;
  videoId: number;
};

export async function up(sql: Sql) {
  await sql`
  CREATE TABLE likes (
    id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    thumbs_up boolean,
    user_id integer NOT NULL REFERENCES users (id) ON DELETE CASCADE,
    video_id integer NOT NULL REFERENCES videos (id), ON DELETE CASCADE,
  )
  `;
}

export async function down(sql: Sql) {
  await sql`
  DROP TABLE videos
  `;
}
