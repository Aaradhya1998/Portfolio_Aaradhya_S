// Requires: DATABASE_URL (from Neon dashboard)
// Requires: APPROVE_SECRET (any random string you choose, e.g. "myportfolio2026")
// Requires: RESEND_API_KEY (already set)

import { neon, NeonQueryFunction } from '@neondatabase/serverless';

export function getSql(): NeonQueryFunction<false, false> | null {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    return null;
  }
  return neon(connectionString);
}

export async function query<T = any>(queryText: string, params: any[] = []): Promise<T[]> {
  const sql = getSql();
  if (!sql) {
    throw new Error('DATABASE_URL environment variable is not set');
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const result = await (sql as any)(queryText, params);
  return result as T[];
}

export async function initDb() {
  const sql = getSql();
  if (!sql) return;
  await sql`
    CREATE TABLE IF NOT EXISTS reviews (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      role TEXT NOT NULL,
      company TEXT NOT NULL,
      rating INTEGER NOT NULL,
      message TEXT NOT NULL,
      approved BOOLEAN DEFAULT false,
      created_at TIMESTAMP DEFAULT NOW()
    );
  `;
}
