import { Sql } from 'postgres';

export type User = {
  id: number;
  userName: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  email: string;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE users (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      user_name varchar(50) NOT NULL UNIQUE,
      email varchar(50) NOT NULL,
      password_hash varchar(80) NOT NULL,
      first_name varchar(50) NOT NULL,
      last_name varchar(50) NOT NULL,
      date_of_birth timestamp NOT NULL
    );
  `;
}

export async function down(sql: Sql) {
  await sql`
    DROP TABLE users
  `;
}
