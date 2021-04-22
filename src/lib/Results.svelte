<script lang="ts">
	import { categories } from '../stores';
	import Result from './Result.svelte';
	export let framework;
	export let path;
</script>

{#each categories as category}
	<Result {framework} {category} {path} />
{/each}
