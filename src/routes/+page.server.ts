import type { PageServerLoad } from './$types'
import { db } from '../lib/database'
import type { Schemata } from '../model/InformationSchema'

export const load: PageServerLoad = async () => {
  const schemata = await db
    .selectFrom('information_schema.schemata')
    .select([
      'catalog_name',
      'schema_name',
      'schema_owner',
      'default_character_set_catalog',
      'default_character_set_schema',
      'default_character_set_name',
    ] as const)
    .execute()

  return { schemata }
}
