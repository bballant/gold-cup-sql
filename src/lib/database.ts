import type { Database, PsqlConnection } from '../model/Database.ts'
import { Pool } from 'pg'
import { Kysely, PostgresDialect } from 'kysely'

const connection: PsqlConnection = {
    database: 'postgres',
    host: 'localhost',
    user: 'bballant',
    port: 5432,
}

const dialect = new PostgresDialect({
    pool: new Pool({
        ...connection,
        password: process.env.DB_PASSWORD ?? '',
        max: 10,
    })
})

// Database interface is passed to Kysely's constructor, and from now on, Kysely
// knows your database structure.
// Dialect is passed to Kysely's constructor, and from now on, Kysely knows how
// to communicate with your database.
export const db = new Kysely<Database>({
    dialect,
})

export { connection }
