<script lang="ts">
	import { page } from '$app/stores';
	import '../app.postcss';

	import { frameworks } from '../stores';

	let showMobileMenu = false;
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<div>
	<nav class="bg-gray-800">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex items-center justify-between h-16">
				<div class="flex items-center">
					<div class="flex-shrink-0">
						<a href="/" class="text-white font-bold text-xl">Lighthouse Test</a>
					</div>
					<div class="hidden md:block">
						<div class="ml-10 flex items-baseline space-x-4">
							<a
								href="/"
								class="px-3 py-2 rounded-md text-sm font-medium"
								class:bg-gray-900={$page.path === '/'}
								class:text-white={$page.path === '/'}
								class:text-gray-300={$page.path !== '/'}
								class:hover:bg-gray-700={$page.path !== '/'}
								class:hover:text-white={$page.path !== '/'}>Home</a
							>
							{#each frameworks as framework}
								<a
									href={'/' + framework.toLowerCase()}
									class="px-3 py-2 rounded-md text-sm font-medium"
									class:bg-gray-900={$page.path === '/' + framework.toLowerCase()}
									class:text-white={$page.path === '/' + framework.toLowerCase()}
									class:text-gray-300={$page.path !== '/' + framework.toLowerCase()}
									class:hover:bg-gray-700={$page.path !== '/' + framework.toLowerCase()}
									class:hover:text-white={$page.path !== '/' + framework.toLowerCase()}
									>{framework}</a
								>
							{/each}
						</div>
					</div>
				</div>
				<div class="hidden md:block">
					<div class="ml-4 flex items-center md:ml-6">
						<a
							href="https://github.com/lighthouse-test/lighthouse-test.github.io"
							rel="noopener"
							target="_blank"
							class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
						>
							<span class="sr-only">GitHub</span>
							<svg
								class="h-6 w-6 cursor-pointer"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
								><path
									d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
								/></svg
							>
						</a>
					</div>
				</div>
				<div class="-mr-2 flex md:hidden">
					<!-- Mobile menu button -->
					<button
						type="button"
						class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
						aria-controls="mobile-menu"
						aria-expanded="false"
						on:click={() => {
							showMobileMenu = !showMobileMenu;
						}}
					>
						<span class="sr-only">Open main menu</span>
						<svg
							class="block h-6 w-6"
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
						<!--
              Heroicon name: outline/x

              Menu open: "block", Menu closed: "hidden"
            -->
						<svg
							class="hidden h-6 w-6"
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
		</div>

		<!-- Mobile menu, show/hide based on menu state. -->
		{#if showMobileMenu}
			<div class="md:hidden" id="mobile-menu">
				<div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
					<a
						href="/"
						class="block px-3 py-2 rounded-md text-base font-medium"
						class:bg-gray-900={$page.path === '/'}
						class:text-white={$page.path === '/'}
						class:text-gray-300={$page.path !== '/'}
						class:hover:bg-gray-700={$page.path !== '/'}
						class:hover:text-white={$page.path !== '/'}>Home</a
					>
					{#each frameworks as framework}
						<a
							href={'/' + framework.toLowerCase()}
							class="block px-3 py-2 rounded-md text-sm font-medium"
							class:bg-gray-900={$page.path === '/' + framework.toLowerCase()}
							class:text-white={$page.path === '/' + framework.toLowerCase()}
							class:text-gray-300={$page.path !== '/' + framework.toLowerCase()}
							class:hover:bg-gray-700={$page.path !== '/' + framework.toLowerCase()}
							class:hover:text-white={$page.path !== '/' + framework.toLowerCase()}>{framework}</a
						>
					{/each}
				</div>
			</div>
		{/if}
	</nav>

	<main>
		<slot />
	</main>
</div>

<style style lang="postcss">
</style>
