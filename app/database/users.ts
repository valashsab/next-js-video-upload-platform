import { cache } from 'react';
import { sql } from '../database/connect';
import { User } from '../migrations/00000-createTableusers';

export type UserWithPasswordHash = User & {
  passwordHash: string;
};

export const createUser = cache(async (email: string, passwordHash: string) => {
  const [user] = await sql<User[]>`
      INSERT INTO users
        (email, password_hash)
      VALUES
        (${email.toLowerCase()}, ${passwordHash})
      RETURNING
        id,
        username
    `;
  return user;
});

export const getUserByEmail = cache(async (email: string) => {
  const [user] = await sql<User[]>`
    SELECT
      id,
      email
    FROM
      users
    WHERE
      username = ${email.toLowerCase()}
  `;
  return user;
});

export const getUserWithPasswordHashByEmail = cache(async (email: string) => {
  const [user] = await sql<UserWithPasswordHash[]>`
    SELECT
      *
    FROM
      users
    WHERE
      username = ${email.toLowerCase()}
  `;
  return user;
});
