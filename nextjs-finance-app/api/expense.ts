import { NextApiRequest, NextApiResponse } from 'next';
import { Pool } from 'pg';
import { parse } from 'pg-connection-string';

const connectionString = process.env.DATABASE_URL;
const config = parse(connectionString);

config.ssl = {
  rejectUnauthorized: false
}

const pool = new Pool(config);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case 'GET':
      const expenses = await pool.query('SELECT * FROM expenses');
      res.status(200).json(expenses.rows);
      break;
    case 'POST':
      const { category, amount, date } = req.body;
      const newExpense = await pool.query('INSERT INTO expenses (category, amount, date) VALUES ($1, $2, $3) RETURNING *', [category, amount, date]);
      res.status(201).json(newExpense.rows[0]);
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}