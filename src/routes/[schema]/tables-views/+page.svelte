<script lang="ts">
  import type { Tables, Views } from '../../../model/InformationSchema';
  import type { PsqlConnection } from '../../../model/Database';
  export let data: {
    schema: string;
    tables: Tables[];
    views: Views[];
    connection: PsqlConnection;
  };
</script>

<nav aria-label="Breadcrumb" class="text-sm text-gray-500 mb-4 text-center">
  <ol class="inline-flex items-center space-x-2 justify-center">
    <li>
      <a href="/" class="hover:underline">{data.connection.database}</a>
    </li>
    <li>/</li>
    <li class="font-semibold">{data.schema}</li>
  </ol>
</nav>
<h1 class="text-2xl font-bold mb-4 text-center">
  Tables and Views for {data.schema}
</h1>

<section class="mb-6">
  <div class="max-w-6xl mx-auto p-4 bg-white shadow rounded overflow-x-auto mb-6">
    <table class="table-auto w-full border-collapse">
      <caption class="text-xl font-semibold mb-4 text-center">Tables</caption>
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
                href={`/${data.schema}/tables-views/tables/${table.table_name}`}
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
  <div class="max-w-6xl mx-auto p-4 bg-white shadow rounded overflow-x-auto mb-6">
    <table class="table-auto w-full border-collapse">
      <caption class="text-xl font-semibold mb-4 text-center">Views</caption>
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
