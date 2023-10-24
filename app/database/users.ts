import { cache } from 'react';
import { User } from '../../migrations/00000-createTableUsers';
import { sql } from '../database/connect';

export type UserWithPasswordHash = User & {
  passwordHash: string;
};

export const createUser = cache(
  async (
    userName: string,
    firstName: string,
    lastName: string,
    dateOfBirth: Date,
    email: string,
    passwordHash: string,
  ) => {
    const [user] = await sql<User[]>`
      INSERT INTO users
        (user_name, first_name, last_name, date_of_birth, email, password_hash)
      VALUES
        (${userName}, ${firstName}, ${lastName}, ${dateOfBirth}, ${email.toLowerCase()}, ${passwordHash})
      RETURNING
        id,
        user_name
        first_name,
        last_name,
        date_of_birth,
        email
    `;
    return user;
  },
);

export const getUserByUserName = cache(async (userName: string) => {
  const [user] = await sql<User[]>`
    SELECT
      id,
      user_name
    FROM
      users
    WHERE
      email = ${userName.toLowerCase()}
  `;
  return user;
});

export const getUserWithPasswordHashByUserName = cache(
  async (userName: string) => {
    const [user] = await sql<UserWithPasswordHash[]>`
    SELECT
      *
    FROM
      users
    WHERE
      user_name = ${userName.toLowerCase()}
  `;
    return user;
  },
);
