<script lang="ts">
	import { modes, groups } from '../stores';
</script>

<svelte:head>
	<title>LightHouse Test</title>
	<meta name="description" content="Lighthouse test result comparison" />
</svelte:head>

<header class="bg-white shadow">
	<div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
		<h1 class="text-3xl font-bold text-gray-900">Lighthouse Test Results</h1>
	</div>
</header>

<div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
	<div class="px-4 py-6 sm:px-0">
		<table width="100%">
			<thead>
				<tr>
					<th />
					<th align="left">Framework & UI</th>
					{#each modes as mode}
						<th align="right">{mode.name}</th>
					{/each}
				</tr>
			</thead>
			<tbody>
				{#each groups as group}
					{#each group.frameworks as framework}
						<tr>
							<th align="left"
								>{group.name}
								<small>(<a href={group.web} rel="noopener" target="_blank">{group.web}</a>)</small
								></th
							>
							<th align="left">
								<a
									class="font-semibold"
									href={'https://github.com/lighthouse-test/' + framework.path}>{framework.name}</a
								>
							</th>
							{#each modes as mode}
								<td align="right">
									<a
										href={'https://lighthouse-test.github.io/' +
											framework.path +
											'/' +
											mode.path +
											'/_lighthouse/_.report.html'}
										rel="noopener"
										target="_blank"
									>
										<img
											class="w-28	min-w-max"
											alt={framework.name + ' lighthouse performance result'}
											src={'https://lighthouse-test.github.io/' +
												framework.path +
												'/' +
												mode.path +
												'/_lighthouse/_.performance.svg'}
										/>
									</a>
								</td>
							{/each}
						</tr>
					{/each}
				{/each}
			</tbody>
		</table>
	</div>
</div>
