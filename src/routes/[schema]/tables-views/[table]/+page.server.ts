import type { PageServerLoad } from './$types';
import { db } from '../../../../../lib/database';
import type { Columns } from '../../../../../model/InformationSchema';

export const load: PageServerLoad = async ({ params }) => {
  const schema = params.schema;
  const table = params.table;

  const columns: Columns[] = await db
    .selectFrom('information_schema.columns')
    .select([
      'column_name',
      'ordinal_position',
      'column_default',
      'is_nullable',
      'data_type',
    ] as const)
    .where('table_schema', '=', schema)
    .where('table_name', '=', table)
    .execute();

  return { schema, table, columns };
};
