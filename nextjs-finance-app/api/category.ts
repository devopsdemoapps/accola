import { Pool } from 'pg';
import { db } from './db';

const pool = new Pool({
  connectionString: db,
});

export const getCategories = async () => {
  const res = await pool.query('SELECT * FROM categories');
  return res.rows;
};

export const getCategoryById = async (id: number) => {
  const res = await pool.query('SELECT * FROM categories WHERE id = $1', [id]);
  return res.rows[0];
};

export const createCategory = async (name: string) => {
  const res = await pool.query('INSERT INTO categories (name) VALUES ($1) RETURNING *', [name]);
  return res.rows[0];
};

export const updateCategory = async (id: number, name: string) => {
  const res = await pool.query('UPDATE categories SET name = $1 WHERE id = $2 RETURNING *', [name, id]);
  return res.rows[0];
};

export const deleteCategory = async (id: number) => {
  const res = await pool.query('DELETE FROM categories WHERE id = $1', [id]);
  return res.rows[0];
};