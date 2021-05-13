<script lang="ts">
	import '../app.postcss';
	import { page, navigating } from '$app/stores';
	import { TECH_TAGS, DESIGN_TAGS } from '$lib/stores';

	let showMobileMenu = false;
	let currentMenu = null;
	$: {
		if ($navigating) {
			showMobileMenu = false;
			currentMenu = null;
		}
	}

	const handleKeydown = (event) => {
		if (event.keyCode === 27) {
			currentMenu = null;
		}
	};
</script>

<svelte:window on:keyup={handleKeydown} />

<div class="relative bg-gray-900">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between items-center py-4 md:justify-start md:space-x-10">
			<div class="flex justify-start lg:w-0 lg:flex-1">
				<a href="/" class="text-white font-bold text-xl">Lighthouse Results</a>
			</div>
			<div class="-mr-2 -my-2 md:hidden">
				<button
					type="button"
					class="rounded-md p-2 inline-flex items-center justify-center text-gray-200 hover:text-white"
					aria-expanded="false"
					on:click={() => {
						showMobileMenu = true;
					}}
				>
					<span class="sr-only">Open menu</span>
					<svg
						class="h-6 w-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
			</div>
			<nav class="hidden md:flex space-x-10">
				<div class="relative">
					<button
						type="button"
						class="group rounded-md inline-flex items-center text-base font-medium text-gray-200 hover:text-white"
						class:text-white={!$page.path.indexOf('/frameworks/')}
						class:text-gray-200={$page.path.indexOf('/frameworks/')}
						aria-expanded="false"
						on:click={() => {
							currentMenu = currentMenu === 'frameworks' ? null : 'frameworks';
						}}
					>
						<span>Frameworks</span>
						<svg
							class="text-gray-200 ml-2 h-5 w-5 group-hover:text-white"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
								clip-rule="evenodd"
							/>
						</svg>
					</button>

					{#if currentMenu === 'frameworks'}
						<div
							class="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
						>
							<div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
								<div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
									{#each TECH_TAGS as tag}
										<a
											href={'/frameworks/' + tag.slug}
											class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
										>
											<span class="flex-shrink-0 h-6 w-6 mt-1">{@html tag.logo}</span>
											<div class="ml-4">
												<p class="text-base font-medium text-gray-900">{tag.name}</p>
												<p class="mt-1 text-sm text-gray-500">
													{tag.web}
												</p>
											</div>
										</a>
									{/each}
								</div>
							</div>
						</div>
					{/if}
				</div>

				<div class="relative">
					<button
						type="button"
						class="group rounded-md inline-flex items-center text-base font-medium text-gray-200 hover:text-white"
						class:text-white={!$page.path.indexOf('/designs/')}
						class:text-gray-200={$page.path.indexOf('/designs/')}
						aria-expanded="false"
						on:click={() => {
							currentMenu = currentMenu === 'designs' ? null : 'designs';
						}}
					>
						<span>Designs</span>
						<svg
							class="text-gray-200 ml-2 h-5 w-5 group-hover:text-white"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
								clip-rule="evenodd"
							/>
						</svg>
					</button>

					{#if currentMenu === 'designs'}
						<div
							class="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0"
						>
							<div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
								<div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
									{#each DESIGN_TAGS as tag}
										<a
											href={'/designs/' + tag.slug}
											class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
										>
											<span class="flex-shrink-0 h-6 w-6 mt-1">{@html tag.logo}</span>
											<div class="ml-4">
												<p class="text-base font-medium text-gray-900">{tag.name}</p>
												<p class="mt-1 text-sm text-gray-500">
													{tag.web}
												</p>
											</div>
										</a>
									{/each}
								</div>
							</div>
						</div>
					{/if}
				</div>
			</nav>
			<div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
				<a
					href="https://github.com/lighthouse-test/lighthouse-test.github.io"
					rel="noopener"
					target="_blank"
					class="p-1 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
				>
					<span class="sr-only">GitHub</span>
					<svg
						class="h-6 w-6 cursor-pointer"
						fill="currentColor"
						stroke="currentColor"
						viewBox="0 0 256 249"
						xmlns="http://www.w3.org/2000/svg"
						preserveAspectRatio="xMinYMin meet"
						><g
							><path
								d="M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0"
							/><path
								d="M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923M54.027 187.23c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65M58.33 194.39c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069M65.606 202.683c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258M75.01 205.483c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612M85.714 206.67c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86M96.228 206.267c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398"
							/></g
						></svg
					>
				</a>
			</div>
		</div>
	</div>

	{#if showMobileMenu}
		<div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
			<div
				class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50"
			>
				<div class="pt-5 pb-6 px-5">
					<div class="flex items-center justify-between">
						<div>
							<div class="flex justify-start lg:w-0 lg:flex-1">
								<a href="/" class="text-gray-700 font-bold text-xl">Lighthouse Results</a>
							</div>
						</div>
						<div class="-mr-2">
							<button
								type="button"
								class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
								on:click={() => {
									showMobileMenu = false;
								}}
							>
								<span class="sr-only">Close menu</span>
								<svg
									class="h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
					</div>
					<div class="mt-6">
						<nav class="grid gap-y-8">
							{#each TECH_TAGS as tag}
								<a
									href={'/frameworks/' + tag.slug}
									class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
								>
									<span class="flex-shrink-0 h-6 w-6 mt-1">{@html tag.logo}</span>
									<span class="ml-3 text-base font-medium text-gray-900">{tag.name}</span>
								</a>
							{/each}
						</nav>
					</div>
				</div>
				<div class="py-6 px-5 space-y-6">
					<div class="grid grid-cols-2 gap-y-4 gap-x-8">
						{#each DESIGN_TAGS as tag}
							<a
								href={'/designs/' + tag.slug}
								class="text-base font-medium text-gray-900 hover:text-gray-700">{tag.name}</a
							>
						{/each}
					</div>
				</div>
			</div>
		</div>
	{/if}
</div>

<main>
	<slot />
</main>

<style style lang="postcss">
</style>
