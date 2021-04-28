<script lang="ts">
	import type Group from './interfaces/group';
	import { modes, categories } from '../stores';

	export let group: Group;
</script>

<header class="bg-white shadow">
	<div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
		<h1 class="text-3xl font-bold text-gray-900">
			Lighthouse Test Results {group.name}
			<small class="hidden lg:inline-flex"
				><a href={group.web} rel="noopener" target="_blank">({group.web})</a></small
			>
		</h1>
	</div>
</header>

<div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
	<div class="px-4 py-6 sm:px-0 overflow-x-scroll">
		<table class="w-full">
			{#each group.frameworks as framework}
				<tr>
					<th class="text-left"
						>{framework.name}
						<small class="hidden lg:inline-flex"
							>(<a href={framework.web} rel="noopener" target="_blank">{framework.web}</a>)</small
						></th
					>
					{#each modes as mode}
						<th class="text-right"
							>{mode.name}
							<small class="hidden lg:inline-flex"
								>(<a
									href={'https://github.com/lighthouse-test/' +
										framework.path +
										'/tree/gh-pages/' +
										mode.path}
									rel="noopener"
									target="_blank">build</a
								>)</small
							></th
						>
					{/each}
				</tr>
				{#each categories as category}
					<tr>
						<th class="text-left">
							<a
								href={'https://github.com/lighthouse-test/' + framework.path}
								rel="noopener"
								target="_blank"
								><span class="hidden">{framework.name + ' Source Code'}</span>{category.name}</a
							>
						</th>
						{#each modes as mode}
							<td class="justify-right">
								<a
									href={'https://lighthouse-test.github.io/' +
										framework.path +
										'/' +
										mode.path +
										'/_lighthouse/_.report.html'}
									rel="noopener"
									target="_blank"
								>
									<span class="hidden"
										>{framework.name +
											' ' +
											mode.path +
											' mode lighthouse ' +
											category.path +
											' result'}</span
									>
									<img
										class="badge float-right w-28 max-w-max"
										alt={framework.name + ' lighthouse ' + category.path}
										src={'https://lighthouse-test.github.io/' +
											framework.path +
											'/' +
											mode.path +
											'/_lighthouse/_.' +
											category.path +
											'.svg'}
									/>
								</a>
							</td>
						{/each}
					</tr>
				{/each}
				<tr><td colspan="4">&nbsp;</td></tr>
			{/each}
		</table>
	</div>
</div>
