-- This file is only my notes, changing
-- this file doesn't change anything in
-- the database

-- Create users table
CREATE TABLE users (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  email varchar(50) NOT NULL UNIQUE,
  password_hash varchar(80) NOT NULL,
  first_name varchar(50) NOT NULL,
  last_name varchar(50) NOT NULL,
  date_of_birth timestamp NOT NULL
);





-- Read some users (R in CRUD - Read)
SELECT * FROM users;



CREATE DATABASE XXX;
CREATE USER XXX WITH ENCRYPTED PASSWORD 'XXX';
GRANT ALL PRIVILEGES ON DATABASE XXX TO XXX;
\connect XXX;
CREATE SCHEMA xxx AUTHORIZATION XXX;



import { Sql } from 'postgres';

export type Comment = {
  id: number;
  content: string;
  dateCommentCreated: Date;
  userId: number;
  videoId: number;
};

export async function up(sql: Sql) {
  await sql`
  CREATE TABLE likes (
    id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    content varchar(100),
    date_comment_created timestamp NOT NULL,
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
    CREATE TABLE
      categories (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        travel VARCHAR(30),
        celebration VARCHAR(30),
        sport VARCHAR(30),
        nature VARCHAR(30),
        education VARCHAR(30),
        diy VARCHAR(30),
        tutorial VARCHAR(30)
      );
  `;
}

export async function down(sql: Sql) {
  await sql` DROP TABLE categories `;
}
