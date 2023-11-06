import { NextApiRequest, NextApiResponse } from 'next';
import { Pool } from 'pg';
import { parse } from 'pg-connection-string';

const connectionString = process.env.DATABASE_URL || '';
const config = parse(connectionString);

config.ssl = {
  rejectUnauthorized: false
};

const pool = new Pool(config);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const result = await pool.query('SELECT * FROM reports');
        res.status(200).json(result.rows);
      } catch (err) {
        res.status(500).json({ message: 'Error fetching reports' });
      }
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}