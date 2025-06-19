<script lang="ts">
  import Table from '@skeletonlabs/skeleton-svelte/dist/components/Table.svelte';
  import Thead from '@skeletonlabs/skeleton-svelte/dist/components/Thead.svelte';
  import Tbody from '@skeletonlabs/skeleton-svelte/dist/components/Tbody.svelte';
  import Tr from '@skeletonlabs/skeleton-svelte/dist/components/Tr.svelte';
  import Th from '@skeletonlabs/skeleton-svelte/dist/components/Th.svelte';
  import Td from '@skeletonlabs/skeleton-svelte/dist/components/Td.svelte';
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

<Table class="w-full">
  <Thead>
    <Tr>
      <Th>Schema</Th>
      <Th>Owner</Th>
      <Th>Default Charset Catalog</Th>
      <Th>Default Charset Schema</Th>
      <Th>Default Charset</Th>
    </Tr>
  </Thead>
  <Tbody>
    {#each data.schemata as schema}
      <Tr>
        <Td>{schema.schema_name}</Td>
        <Td>{schema.schema_owner}</Td>
        <Td>{schema.default_character_set_catalog ?? '–'}</Td>
        <Td>{schema.default_character_set_schema ?? '–'}</Td>
        <Td>{schema.default_character_set_name ?? '–'}</Td>
      </Tr>
    {/each}
  </Tbody>
</Table>
