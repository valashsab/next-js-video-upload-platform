import { Sql } from 'postgres';

export type VideoCategoryRelation = {
  id: number;
  category_id: number;
  video_id: number;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE videosCategoriesRelations (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      category_id integer NOT NULL REFERENCES categories (id) ON DELETE CASCADE,
      video_id integer NOT NULL REFERENCES videos (id) ON DELETE CASCADE,
    );
  `;
}

export async function down(sql: Sql) {
  await sql`
    DROP TABLE users
  `;
}
