<script lang="ts">
  import type { PsqlConnection } from '../model/Database';
  export let data: {
    schemata: {
      catalog_name: string;
      schema_name: string;
      schema_owner: string;
      default_character_set_catalog: string | null;
      default_character_set_schema: string | null;
      default_character_set_name: string | null;
    }[];
    connection: PsqlConnection;
  };
</script>

<section class="mb-6">
  <h2 class="text-xl font-semibold">Connection Details</h2>
  <p>Database: {data.connection.database}</p>
  <p>Host: {data.connection.host}</p>
  <p>User: {data.connection.user}</p>
  <p>Port: {data.connection.port}</p>
</section>

<h1 class="text-2xl font-bold mb-4">Database Schemas</h1>

<div class="max-w-6xl mx-auto overflow-x-auto">
  <table class="table-auto w-full border-collapse">
    <thead class="bg-gray-100">
      <tr>
        <th class="px-4 py-2 text-left">Schema</th>
        <th class="px-4 py-2 text-left">Owner</th>
        <th class="px-4 py-2 text-left">Default Charset Catalog</th>
        <th class="px-4 py-2 text-left">Default Charset Schema</th>
        <th class="px-4 py-2 text-left">Default Charset</th>
      </tr>
    </thead>
    <tbody>
      {#each data.schemata as schema}
        <tr class="border-t">
          <td class="px-4 py-2">
            <a class="text-blue-600 hover:underline" href="/{schema.schema_name}/tables-views">
              {schema.schema_name}
            </a>
          </td>
          <td class="px-4 py-2">{schema.schema_owner}</td>
          <td class="px-4 py-2">{schema.default_character_set_catalog ?? '–'}</td>
          <td class="px-4 py-2">{schema.default_character_set_schema ?? '–'}</td>
          <td class="px-4 py-2">{schema.default_character_set_name ?? '–'}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
