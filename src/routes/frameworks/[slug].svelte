<script lang="ts">
	import { page } from '$app/stores';
	import { TECH_TAGS } from '$lib/stores';
	import FrameworkTable from '$lib/FrameworkTable.svelte';

	$: tag = TECH_TAGS.filter((tag) => tag.slug === $page.params.slug)[0];
</script>

<svelte:head>
	<title>LightHouse Results | {tag.name}</title>
	<meta name="description" content={'Lighthouse result comparison for ' + tag.slug} />
</svelte:head>

<FrameworkTable {tag} />
