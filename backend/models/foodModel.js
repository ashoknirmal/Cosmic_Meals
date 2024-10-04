import { sql } from '@vercel/postgres';

// Create Foods table
export const createFoodsTable = async () => {
  await sql`
    CREATE TABLE IF NOT EXISTS foods (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      price DECIMAL(10, 2) NOT NULL,
      image VARCHAR(255) NOT NULL,
      category VARCHAR(255) NOT NULL
    );
  `;
};

// Insert a new food item
export const createFood = async (name, description, price, image, category) => {
  const { rows } = await sql`
    INSERT INTO foods (name, description, price, image, category)
    VALUES (${name}, ${description}, ${price}, ${image}, ${category})
    RETURNING *;
  `;
  return rows[0];
};
