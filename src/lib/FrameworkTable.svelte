<script lang="ts">
	import type Tag from './interfaces/tag';
	import { URL, MODES, FRAMEWORKS } from './stores';

	export let tag: Tag | false = false;
	$: frameworks = tag
		? FRAMEWORKS.filter((framework) => framework.techTag === tag || framework.designTag === tag)
		: FRAMEWORKS;
</script>

{#if tag}
	<div class="max-w-7xl mx-auto pt-6 px-4 sm:px-6 lg:px-8">
		<div class="lg:flex lg:items-center lg:justify-between">
			<span class="flex-shrink-0 h-12 w-12 mr-4">{@html tag.logo}</span>
			<div class="flex-1 min-w-0">
				<h2 class="flex text-2xl font-bold leading-12 text-gray-900 sm:text-3xl sm:truncate">
					{tag.name} Lighthouse Results
				</h2>
				<div class="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
					<div class="mt-2 flex items-center text-sm text-gray-500">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
							/>
						</svg>
						<a href={tag.web} target="_blank" rel="noopener">{tag.web}</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	<br />
{:else}
	<br />
{/if}

<div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 overflow-x-scroll">
	<table class="min-w-full divide-y divide-gray-200">
		<thead class="bg-gray-50">
			<tr>
				<th
					scope="col"
					class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
					>Framework & Design</th
				>
				{#each MODES as mode}
					<th
						scope="col"
						class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
						>{mode.name}</th
					>
				{/each}
			</tr>
		</thead>
		<tbody class="bg-white divide-y divide-gray-200">
			{#each frameworks as framework}
				<tr>
					<th
						scope="col"
						class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
					>
						<div class="text-sm text-gray-900">
							<a
								class="font-semibold"
								href={'https://github.com/lighthouse-test/' + framework.slug}
								rel="noopener"
								target="_blank">{framework.name}</a
							>
						</div>
						<div class="text-sm text-gray-500">
							{#if !tag}
								<small class="hidden lg:inline-flex"
									>[<a href={'frameworks/' + framework.techTag.slug}>{framework.techTag.name}</a
									>]</small
								>
							{/if}
							{#if framework.designTag}
								<small class="hidden lg:inline-flex"
									>[<a href={'designs/' + framework.designTag.slug}>{framework.designTag.name}</a
									>]</small
								>
							{/if}
						</div>
					</th>
					{#each MODES as mode}
						<td class="px-6 py-4 whitespace-nowrap text-right">
							{#if framework.modes[mode.slug]}
								<a
									href={'https://lighthouse-test.github.io/' +
										framework.slug +
										'/' +
										mode.slug +
										'/_lighthouse/_.report.html'}
									rel="noopener"
									target="_blank"
								>
									<img
										class="badge float-right w-28 max-w-max"
										width="112"
										height="20"
										alt={framework.name + ' lighthouse performance result'}
										src={'https://lighthouse-test.github.io/' +
											framework.slug +
											'/' +
											mode.slug +
											'/_lighthouse/_.performance.svg'}
									/>
								</a>
							{:else}
								<div class="text-sm font-bold text-gray-500">
									<small>N/A</small>
								</div>
							{/if}
						</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>
