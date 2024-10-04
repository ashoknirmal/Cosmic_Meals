import { sql } from '@vercel/postgres';

// Create Users table
export const createUsersTable = async () => {
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      cartData JSON DEFAULT '{}'::json
    );
  `;
};

// Insert a new user
export const createUser = async (name, email, password, cartData = {}) => {
  const { rows } = await sql`
    INSERT INTO users (name, email, password, cartData)
    VALUES (${name}, ${email}, ${password}, ${cartData})
    RETURNING *;
  `;
  return rows[0];
};
