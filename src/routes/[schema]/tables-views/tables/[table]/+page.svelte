<script lang="ts">
  import type { Columns } from '../../../../../model/InformationSchema';
  export let data: {
    schema: string;
    table: string;
    columns: Columns[];
  };
</script>


<div class="max-w-6xl mx-auto p-4 bg-white shadow rounded overflow-x-auto">
  <h1 class="text-2xl font-bold mb-4 text-center">{data.schema}.{data.table}</h1>
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
