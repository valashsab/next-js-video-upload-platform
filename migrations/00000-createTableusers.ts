import { Sql } from 'postgres';

export type User = {
  id: number;
  email: string;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE users (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      email varchar(50) NOT NULL UNIQUE,
      password_hash varchar(50) NOT NULL,
      first_name varchar(50) NOT NULL,
      last_name varchar(50) NOT NULL,
      date_of_birth timestamp
    );
  `;
}

export async function down(sql: Sql) {
  await sql`
    DROP TABLE users
  `;
}
