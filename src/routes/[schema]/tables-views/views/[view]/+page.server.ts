import type { PageServerLoad } from './$types';
import { db } from '../../../../../lib/database';
import type { Views } from '../../../../../model/InformationSchema';

export const load: PageServerLoad = async ({ params }) => {
  const schema = params.schema;
  const view = params.view;

  const viewDetail: Views = await db
    .selectFrom('information_schema.views')
    .select(['view_definition', 'check_option', 'is_updatable'] as const)
    .where('table_schema', '=', schema)
    .where('table_name', '=', view)
    .executeTakeFirstOrThrow();

  return { schema, view, viewDetail };
};
