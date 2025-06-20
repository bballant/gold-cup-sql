<script lang="ts">
  import type { Views } from '../../../../../model/InformationSchema';
  import type { PsqlConnection } from '../../../../../model/Database';
  export let data: {
    schema: string;
    view: string;
    viewDetail: Views;
    viewHtml: string;
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
    <li class="font-semibold">{data.view}</li>
  </ol>
</nav>

<h1 class="text-2xl font-bold mb-4 text-center">View {data.schema}.{data.view}</h1>

<div class="max-w-6xl mx-auto p-4 bg-white shadow rounded overflow-x-auto">

<section class="mb-4">
  <h2 class="text-xl font-semibold mb-2">Definition</h2>
  <div class="overflow-x-auto mb-8 p-4">
    {@html data.viewHtml}
  </div>
</section>

<section class="mb-4">
  <h2 class="text-xl font-semibold mb-2">Check Option</h2>
  <p>{data.viewDetail.check_option}</p>
</section>

<section>
  <h2 class="text-xl font-semibold mb-2">Is Updatable</h2>
  <p>{data.viewDetail.is_updatable}</p>
</section>
</div>
