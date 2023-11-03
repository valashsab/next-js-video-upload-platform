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
    CREATE TABLE
      videos (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        secure_url VARCHAR(150) NOT NULL UNIQUE,
        -- provided by cloudinary
        public_id VARCHAR(50),
        -- provided by cloudinary
        title VARCHAR(50),
        description_content text (150),
        user_id INTEGER NOT NULL REFERENCES users (id) ON DELETE CASCADE,
        -- enabling to set videos on private or public
        visible BOOLEAN,
        -- enables watching certain videos at a certain age
        age_restriction BOOLEAN,
        disable_comments BOOLEAN,
      );
  `;
}

export async function down(sql: Sql) {
  await sql` DROP TABLE videos `;
}
