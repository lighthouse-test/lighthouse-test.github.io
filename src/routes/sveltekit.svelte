<script lang="ts">
	import { modes, categories } from '../stores';
	const framework = 'SvelteKit';
</script>

<svelte:head>
	<title>LightHouse Test</title>
</svelte:head>

<header class="bg-white shadow">
	<div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
		<h1 class="text-3xl font-bold text-gray-900">{framework} Lighthouse Test Results</h1>
	</div>
</header>

<div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
	<div class="px-4 py-6 sm:px-0">
		<table width="100%">
			<thead>
				<tr>
					<th align="left">Cateogry</th>
					<th align="right">SPA</th>
					<th align="right">SSR</th>
					<th align="right">Static</th>
				</tr>
			</thead>
			<tbody>
				{#each categories as category}
				<tr>
					<th align="left">
						<a class="font-semibold" href={'https://github.com/lighthouse-test/' + framework}
							>{category}</a
						>
					</th>
					{#each modes as mode}
					<td align="right">
						<a
							href={'https://lighthouse-test.github.io/' + framework.toLowerCase() + '/' +  mode.toLowerCase() + '/_lighthouse/_.report.html'}
							rel="noopener"
							target="_blank"
						>
							<img
								src={'https://raw.githubusercontent.com/lighthouse-test/' +
									framework.toLowerCase() + '/gh-pages/' + mode.toLowerCase() + 
 								'/_lighthouse/_.' + category + '.svg'}
							/>
						</a>
					</td>
					{/each}
				</tr>
				{/each}
			</tbody>
		</table>
		
	</div>
	<!-- /End replace -->
</div>

<style style lang="postcss"></style>
