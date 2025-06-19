<script lang="ts">
  export let data: {
    schemata: {
      catalog_name: string;
      schema_name: string;
      schema_owner: string;
      default_character_set_catalog: string | null;
      default_character_set_schema: string | null;
      default_character_set_name: string | null;
    }[];
  };
</script>

<h1 class="text-2xl font-bold mb-4">Database Schemas</h1>

<div class="overflow-x-auto">
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
          <td class="px-4 py-2">{schema.schema_name}</td>
          <td class="px-4 py-2">{schema.schema_owner}</td>
          <td class="px-4 py-2">{schema.default_character_set_catalog ?? '–'}</td>
          <td class="px-4 py-2">{schema.default_character_set_schema ?? '–'}</td>
          <td class="px-4 py-2">{schema.default_character_set_name ?? '–'}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
