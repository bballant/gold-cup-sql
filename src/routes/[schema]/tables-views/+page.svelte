<script lang="ts">
  import type { Tables, Views } from '../../../model/InformationSchema';
  export let data: {
    schema: string;
    tables: Tables[];
    views: Views[];
  };
</script>

<h1 class="text-2xl font-bold mb-4">
  Tables and Views for “{data.schema}”
</h1>

<section class="mb-6">
  <h2 class="text-xl font-semibold mb-2">Tables</h2>
  <div class="overflow-x-auto">
    <table class="table-auto w-full border-collapse mb-4">
      <thead class="bg-gray-100">
        <tr>
          <th class="px-4 py-2 text-left">Table Name</th>
        </tr>
      </thead>
      <tbody>
        {#each data.tables as table}
          <tr class="border-t">
            <td class="px-4 py-2">
              <a
                class="text-blue-600 hover:underline"
                href={`/${data.schema}/tables-views/${table.table_name}`}
              >
                {table.table_name}
              </a>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</section>

<section>
  <h2 class="text-xl font-semibold mb-2">Views</h2>
  <div class="overflow-x-auto">
    <table class="table-auto w-full border-collapse">
      <thead class="bg-gray-100">
        <tr>
          <th class="px-4 py-2 text-left">View Name</th>
        </tr>
      </thead>
      <tbody>
        {#each data.views as view}
          <tr class="border-t">
            <td class="px-4 py-2">
              <a
                class="text-blue-600 hover:underline"
                href={`/${data.schema}/tables-views/views/${view.table_name}`}
              >
                {view.table_name}
              </a>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</section>
