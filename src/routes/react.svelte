<script context="module">
	export const hydrate = false;
</script>

<script lang="ts">
	import { groups } from '../stores';
	import Group from '$lib/Group.svelte';
	const group = groups.filter((group) => group.name === 'React')[0];
</script>

<svelte:head>
	<title>LightHouse Test | {group.name}</title>
	<meta name="description" content={'Lighthouse test result comparison for ' + group.name} />
</svelte:head>

<Group {group} />
