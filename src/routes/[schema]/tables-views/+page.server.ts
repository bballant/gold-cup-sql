import type { PageServerLoad } from './$types';
import { db } from '../../../lib/database';
import type { Tables, Views } from '../../../model/InformationSchema';

export const load: PageServerLoad = async ({ params }) => {
  const schema = params.schema;

  const tables: Tables[] = await db
    .selectFrom('information_schema.tables')
    .select(['table_name', 'table_type'] as const)
    .where('table_schema', '=', schema)
    .execute();

  const views: Views[] = await db
    .selectFrom('information_schema.views')
    .select(['table_name'] as const)
    .where('table_schema', '=', schema)
    .execute();

  return { schema, tables, views };
};
