<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<header class="text-4xl max-w-6xl preset-filled-surface-800-200 mx-auto pb-2 pt-2 mt-2 text-center">
  <img src="/goldcup.png" alt="Gold Cup" class="h-8 inline mx-2" />
  <span class="text-warning-9">Gold Cup SQL</span>
  <img src="/goldcup.png" alt="Gold Cup" class="h-8 inline mx-2" />
</header>

<main>{@render children()}</main>
