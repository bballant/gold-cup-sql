import type {
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

/**
 * Mirrors information_schema.columns in PostgreSQL
 */
export interface ColumnsTable {
  table_catalog: string
  table_schema: string
  table_name: string
  column_name: string
  ordinal_position: number
  column_default: string | null
  is_nullable: 'YES' | 'NO'
  data_type: string
}

export type Columns = Selectable<ColumnsTable>
export type NewColumns = Insertable<ColumnsTable>
export type ColumnsUpdate = Updateable<ColumnsTable>

/**
 * Mirrors information_schema.views in PostgreSQL
 */
export interface ViewsTable {
  table_catalog: string
  table_schema: string
  table_name: string
  view_definition: string | null
  check_option: string
  is_updatable: 'YES' | 'NO'
}

export type Views = Selectable<ViewsTable>
export type NewViews = Insertable<ViewsTable>
export type ViewsUpdate = Updateable<ViewsTable>
