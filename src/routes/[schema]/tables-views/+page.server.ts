import type { PageServerLoad } from './$types';
import { db } from '../../../lib/database';

export const load: PageServerLoad = async ({ params }) => {
  const schema = params.schema;

  const tables = await db
    .selectFrom('information_schema.tables')
    .select(['table_name'] as const)
    .where('table_schema', '=', schema)
    .where('table_type', '=', 'BASE TABLE')
    .execute();

  const views = await db
    .selectFrom('information_schema.views')
    .select(['table_name'] as const)
    .where('table_schema', '=', schema)
    .execute();

  return { schema, tables, views };
};
