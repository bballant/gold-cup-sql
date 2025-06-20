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

<h1 class="text-4xl preset-filled-surface-800-200 max-w-6xl mx-auto text-warning-contrast-900-100 font-bold mb-6 pt-4 pb-4 text-center">
  <img src="/goldcup.png" alt="Gold Cup" class="h-8 inline mx-2" />
  <span class="text-warning-9">Gold Cup SQL</span>
  <img src="/goldcup.png" alt="Gold Cup" class="h-8 inline mx-2" />
</h1>

<h2 class="text-2xl font-semibold mb-2 mt-2 text-center">Connection Details</h2>
<div class="border-2 border-surface-950-50 max-w-xs mx-auto mb-6 pt-4">
  <div>
    <table class="table-auto mx-auto mb-4">
      <tbody>
        <tr>
          <td class="px-4 py-2 font-semibold text-right">Database</td>
          <td class="px-4 py-2">{data.connection.database}</td>
        </tr>
        <tr>
          <td class="px-4 py-2 font-semibold text-right">Host</td>
          <td class="px-4 py-2">{data.connection.host}</td>
        </tr>
        <tr>
          <td class="px-4 py-2 font-semibold text-right">User</td>
          <td class="px-4 py-2">{data.connection.user}</td>
        </tr>
        <tr>
          <td class="px-4 py-2 font-semibold text-right">Port</td>
          <td class="px-4 py-2">{data.connection.port}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>


<div class="max-w-6xl mx-auto overflow-x-auto">
  <table class="table-auto w-full border-collapse">
    <caption class="text-2xl font-bold mb-4 text-center">Database Schemas</caption>
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
