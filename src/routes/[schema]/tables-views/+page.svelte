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
  <ul class="list-disc list-inside">
    {#each data.tables as table}
      <li>
        <a
          class="text-blue-600 hover:underline"
          href={`/${data.schema}/tables-views/${table.table_name}`}
        >
          {table.table_name}
        </a> ({table.table_type})
      </li>
    {/each}
  </ul>
</section>

<section>
  <h2 class="text-xl font-semibold mb-2">Views</h2>
  <ul class="list-disc list-inside">
    {#each data.views as view}
      <li>
        <a
          class="text-blue-600 hover:underline"
          href={`/${data.schema}/tables-views/views/${view.table_name}`}
        >
          {view.table_name}
        </a>
      </li>
    {/each}
  </ul>
</section>
