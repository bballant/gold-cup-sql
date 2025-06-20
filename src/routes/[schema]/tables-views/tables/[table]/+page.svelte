<script lang="ts">
  import type { Columns } from '../../../../../model/InformationSchema';
  import type { PsqlConnection } from '../../../../../model/Database';
  export let data: {
    schema: string;
    table: string;
    columns: Columns[];
    connection: PsqlConnection;
  };
</script>


<nav aria-label="Breadcrumb" class="text-sm text-gray-500 mb-4 text-center">
  <ol class="inline-flex items-center space-x-2 justify-center">
    <li>
      <a href="/" class="hover:underline">{data.connection.database}</a>
    </li>
    <li>/</li>
    <li>
      <a href={`/${data.schema}/tables-views`} class="hover:underline">{data.schema}</a>
    </li>
    <li>/</li>
    <li class="font-semibold">{data.table}</li>
  </ol>
</nav>

<h1 class="text-2xl font-bold mb-4 text-center">Table {data.schema}.{data.table}</h1>

<div class="max-w-6xl mx-auto p-4 bg-white shadow rounded overflow-x-auto">
  <table class="table-auto w-full border-collapse">
    <thead class="bg-gray-100">
      <tr>
        <th class="px-4 py-2 text-left">#</th>
        <th class="px-4 py-2 text-left">Column Name</th>
        <th class="px-4 py-2 text-left">Data Type</th>
        <th class="px-4 py-2 text-left">Nullable</th>
        <th class="px-4 py-2 text-left">Default</th>
      </tr>
    </thead>
    <tbody>
      {#each data.columns as col}
        <tr class="border-t">
          <td class="px-4 py-2">{col.ordinal_position}</td>
          <td class="px-4 py-2">{col.column_name}</td>
          <td class="px-4 py-2">{col.data_type}</td>
          <td class="px-4 py-2">{col.is_nullable}</td>
          <td class="px-4 py-2">{col.column_default ?? '–'}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
