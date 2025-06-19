import type {
  Generated,
  Insertable,
  Selectable,
  Updateable,
} from 'kysely'

import type { PersonTable } from './Person'

export interface Database {
  person: PersonTable
  pet: PetTable
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
