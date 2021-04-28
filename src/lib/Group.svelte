<script lang="ts">
	import type Group from './interfaces/group';
	import { modes, categories } from '../stores';

	export let group: Group;
</script>

<header class="bg-white shadow">
	<div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
		<h1 class="text-3xl font-bold text-gray-900">
			Lighthouse Test Results {group.name}
			<small><a href={group.web} rel="noopener" target="_blank">({group.web})</a></small>
		</h1>
	</div>
</header>

<div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
	<div class="px-4 py-6 sm:px-0">
		<table width="100%">
			{#each group.frameworks as framework}
				<tr>
					<th align="left"
						>{framework.name}
						<small
							>(<a href={framework.web} rel="noopener" target="_blank">{framework.web}</a>)</small
						></th
					>
					{#each modes as mode}
						<th align="right"
							>{mode.name}
							<small
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
						<th align="left">
							<a
								class="font-semibold"
								href={'https://github.com/lighthouse-test/' + framework.path}
								rel="noopener"
								target="_blank"
								><span class="hidden">{framework.name + ' Source Code'}</span>{category.name}</a
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
									<span class="hidden"
										>{framework.name +
											' ' +
											mode.name +
											' mode lighthouse ' +
											category.name +
											' result'}</span
									>
									<img
										alt={framework.name + ' lighthouse ' + category.name}
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
