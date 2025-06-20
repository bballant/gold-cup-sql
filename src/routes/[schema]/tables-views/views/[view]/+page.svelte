<script lang="ts">
  import type { Views } from '../../../../../model/InformationSchema';
  export let data: {
    schema: string;
    view: string;
    viewDetail: Views;
    viewHtml: string;
  };
</script>

<h1 class="text-2xl font-bold mb-4">
  View Details for “{data.view}” in schema “{data.schema}”
</h1>

<section class="mb-4">
  <h2 class="text-xl font-semibold mb-2">Definition</h2>
  <div class="overflow-auto mb-8 p-4">
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
