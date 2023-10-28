import { Sql } from 'postgres';

export type Video = {
  id: number;
  userId: number;
  urlLink: string;
  videoFormat: string;
  videoSize: number;
  title: string;
  descriptionContent: string;
  visible: boolean;
  ageRestriction: boolean;
  disableComments: boolean;
};

export async function up(sql: Sql) {
  await sql`
  CREATE TABLE videos (
    id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    url_link varchar(150) NOT NULL UNIQUE,
    -- check if provided by cloudinary
    video_format varchar(50),
    -- check if provided byd cloudinary
    video_size integer,
    title varchar(50),
    description_content text(150),
    user_id integer NOT NULL REFERENCES users (id) ON DELETE CASCADE,
    -- enabling to set videos on private or public
    visible boolean,
    -- enables watching certain videos at a certain age
    age_restriction boolean,
    disable_comments boolean,
 );
 `;
}

export async function down(sql: Sql) {
  await sql`
  DROP TABLE videos
  `;
}
