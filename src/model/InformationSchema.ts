import type {
  ColumnType,
  Generated,
  Insertable,
  Selectable,
  Updateable,
} from 'kysely'

/**
 * Mirrors information_schema.tables in PostgreSQL
 */
export interface TablesTable {
  table_catalog: string
  table_schema: string
  table_name: string
  table_type: string
  self_referencing_column_name: string | null
  reference_generation: string | null
  user_defined_type_catalog: string | null
  user_defined_type_schema: string | null
  user_defined_type_name: string | null
  is_insertable_into: 'YES' | 'NO'
  is_typed: 'YES' | 'NO'
  commit_action: string | null
}

export type Tables = Selectable<TablesTable>
export type NewTables = Insertable<TablesTable>
export type TablesUpdate = Updateable<TablesTable>
