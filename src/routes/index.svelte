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
	<div class="px-4 py-6 sm:px-0 overflow-x-scroll">
		<table class="w-full">
			<thead>
				<tr>
					<th />
					<th class="text-left">Framework & UI</th>
					{#each modes as mode}
						<th class="text-right">{mode.name}</th>
					{/each}
				</tr>
			</thead>
			<tbody>
				{#each groups as group}
					{#each group.frameworks as framework}
						<tr>
							<th class="text-left"
								>{group.name}
								<small class="hidden lg:inline-flex"
									>(<a href={group.web} rel="noopener" target="_blank">{group.web}</a>)</small
								></th
							>
							<th class="text-left">
								{framework.name}
								<small class="hidden lg:inline-flex"
									>(<a
										class="font-semibold"
										href={'https://github.com/lighthouse-test/' + framework.path}>repo</a
									>)</small
								>
							</th>
							{#each modes as mode}
								<td class="text-right">
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
											class="float-right w-28 max-w-max"
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
