import type { Config } from "drizzle-kit"
import dotenv from 'dotenv'
dotenv.config({ path: '.env' })

export default {
  schema: "./app/lib/schema.ts",
  driver: 'mysql2',
  out: "./drizzle",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!
  }
} satisfies Config