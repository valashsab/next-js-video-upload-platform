import { Sql } from 'postgres';

export type Category = {
  id: number;
  travel: string;
  celebration: string;
  sport: string;
  nature: string;
  education: string;
  diy: string;
  tutorial: string;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE categories (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      travel varchar(30),
      celebration varchar(30),
      sport varchar(30),
      nature varchar(30),
      education varchar(30),
      diy varchar(30),
      tutorial varchar(30),
    );
  `;
}

export async function down(sql: Sql) {
  await sql`
    DROP TABLE users
  `;
}
