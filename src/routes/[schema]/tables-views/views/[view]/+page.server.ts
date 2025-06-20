import type { PageServerLoad } from './$types';
import { db } from '../../../../../lib/database';
import { codeToHtml } from 'shiki';
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

  const viewHtml = await codeToHtml(viewDetail.view_definition ?? '', {
    lang: 'sql',
    theme: 'vitesse-dark'
  });

  return { schema, view, viewDetail, viewHtml };
};
