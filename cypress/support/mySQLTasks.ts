import mysql from 'mysql2/promise';

export async function queryTestDb(query: string, config: any) {
  const connection = await mysql.createConnection({
    host: config.env.DB_HOST,
    user: config.env.DB_USER,
    password: config.env.DB_PASSWORD,
    database: config.env.DB_NAME,
    port: config.env.DB_PORT
  });

  try {
    const [results] = await connection.execute(query);
    await connection.end();
    return results;
  } catch (error) {
    await connection.end();
    throw error;
  }
}
