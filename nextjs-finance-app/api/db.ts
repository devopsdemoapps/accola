// This file contains the database connection pool info.
// Actual Connection details are configured in dbConfig.ts file.
// db.ts

import dbConfig from './../dbConfig'; 

import { Pool } from 'pg';

const pool = new Pool({
  user: dbConfig.user,
  host: dbConfig.host,
  database: dbConfig.database,
  password: dbConfig.password,
  port: dbConfig.port,
});

export default {
  query: (text: string, params: any) => pool.query(text, params),
};