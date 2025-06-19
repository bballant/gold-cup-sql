import type {
  Generated,
  Insertable,
  Selectable,
  Updateable,
} from 'kysely'

import type { PersonTable } from './Person'
import type { TablesTable, ColumnsTable, ViewsTable, SchemataTable } from './InformationSchema'

export interface Database {
  person: PersonTable
  pet: PetTable
  'information_schema.tables': TablesTable
  'information_schema.columns': ColumnsTable
  'information_schema.views': ViewsTable
  'information_schema.schemata': SchemataTable
}

export interface PetTable {
  id: Generated<number>
  name: string
  owner_id: number
  species: 'dog' | 'cat'
}

export type Pet = Selectable<PetTable>
export type NewPet = Insertable<PetTable>
export type PetUpdate = Updateable<PetTable>
