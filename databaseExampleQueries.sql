-- This file is only my notes, changing
-- this file doesn't change anything in
-- the database

-- Create users table
CREATE TABLE users (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  email varchar(50) NOT NULL UNIQUE,
  password_hash varchar(50) NOT NULL,
  first_name varchar(50) NOT NULL,
  last_name varchar(50) NOT NULL,
  date_of_birth timestamp
);

-- Read some users (R in CRUD - Read)
SELECT * FROM users;



CREATE DATABASE XXX;
CREATE USER XXX WITH ENCRYPTED PASSWORD 'XXX';
GRANT ALL PRIVILEGES ON DATABASE XXX TO XXX;
\connect XXX;
CREATE SCHEMA xxx AUTHORIZATION XXX;
