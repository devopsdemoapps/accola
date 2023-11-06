import { Pool } from 'pg';
import { db } from './db';

const pool = new Pool({
  connectionString: db,
});

export const getCurrencies = async () => {
  const res = await pool.query('SELECT * FROM currencies');
  return res.rows;
};

export const getCurrency = async (id: string) => {
  const res = await pool.query('SELECT * FROM currencies WHERE id = $1', [id]);
  return res.rows[0];
};

export const addCurrency = async (currency: string) => {
  const res = await pool.query('INSERT INTO currencies (currency) VALUES ($1) RETURNING *', [currency]);
  return res.rows[0];
};

export const updateCurrency = async (id: string, currency: string) => {
  const res = await pool.query('UPDATE currencies SET currency = $1 WHERE id = $2 RETURNING *', [currency, id]);
  return res.rows[0];
};

export const deleteCurrency = async (id: string) => {
  const res = await pool.query('DELETE FROM currencies WHERE id = $1', [id]);
  return res.rows[0];
};