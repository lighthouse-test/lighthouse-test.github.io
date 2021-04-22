<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Results from '$lib/Results.svelte';
	import { frameworks } from '../stores';
</script>

<svelte:head>
	<title>LightHouse Test</title>
</svelte:head>

<header class="bg-white shadow">
	<div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
		<h1 class="text-3xl font-bold text-gray-900">Lighthouse Test Results</h1>
	</div>
</header>

<div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
	<h2 class="text-xl">Static pre-renderd hello-world without any UI framework</h2>
	<div class="px-4 py-6 sm:px-0">
		{#each frameworks as framework}
			<div class="grid grid-cols-6 gap-y-3">
				<a class="font-semibold" href={'https://github.com/lighthouse-test/' + framework}
					>{framework}</a
				>
				<Results {framework} path={'_index_html'} />
			</div>
		{/each}
	</div>
	<!-- /End replace -->
</div>

<style style lang="postcss"></style>
