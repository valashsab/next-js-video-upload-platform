import { cache } from 'react';
import { User } from '../../migrations/00000-createTableUsers';
import { sql } from '../database/connect';

export type UserWithPasswordHash = User & {
  passwordHash: string;
};

export const createUser = cache(
  async (
    firstName: string,
    lastName: string,
    // timestamp in sql but in js?
    dateOfBirth: Date,
    email: string,
    passwordHash: string,
  ) => {
    const [user] = await sql<User[]>`
      INSERT INTO users
        (first_name, last_name, date_of_birth, email, password_hash)
      VALUES
        (${firstName}, ${lastName}, ${dateOfBirth}, ${email.toLowerCase()}, ${passwordHash})
      RETURNING
        id,
        first_name,
        last_name,
        date_of_birth,
        email
    `;
    return user;
  },
);

export const getUserByEmail = cache(async (email: string) => {
  const [user] = await sql<User[]>`
    SELECT
      id,
      email
    FROM
      users
    WHERE
      email = ${email.toLowerCase()}
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
      email = ${email.toLowerCase()}
  `;
  return user;
});
