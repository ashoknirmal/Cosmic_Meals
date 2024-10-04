import { sql } from '@vercel/postgres';

// Create Orders table
export const createOrdersTable = async () => {
  await sql`
    CREATE TABLE IF NOT EXISTS orders (
      id SERIAL PRIMARY KEY,
      userId INTEGER NOT NULL,
      items JSON NOT NULL,
      amount DECIMAL(10, 2) NOT NULL,
      address JSON NOT NULL,
      status VARCHAR(50) DEFAULT 'Food Processing',
      date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      payment BOOLEAN DEFAULT false,
      FOREIGN KEY (userId) REFERENCES users(id)
    );
  `;
};

// Insert a new order
export const createOrder = async (userId, items, amount, address) => {
  const { rows } = await sql`
    INSERT INTO orders (userId, items, amount, address)
    VALUES (${userId}, ${items}, ${amount}, ${address})
    RETURNING *;
  `;
  return rows[0];
};
