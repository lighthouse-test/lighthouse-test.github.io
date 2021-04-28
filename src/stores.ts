import type Group from "$lib/interfaces/group";
export const url = 'https://lighthouse-test.github.io';
export const modes = [
	{ name: 'SPA', path: 'spa' },
	{ name: 'SSR', path: 'ssr' },
	{ name: 'Static', path: 'static' }
];
export const categories = [
	{ name: 'Performance', path: 'performance' },
	{ name: 'Accessibility', path: 'accessibility' },
	{ name: 'Best Practices', path: 'best-practices' },
	{ name: 'SEO', path: 'seo' },
	{ name: 'PWA', path: 'pwa' }
];

export const groups: Group[] = [
	{
		name: 'Svelte',
		path: 'svelte',
		web: 'https://svelte.dev',
		frameworks: [{ name: 'SvelteKit', path: 'sveltekit', web: 'https://kit.svelte.dev' }]
	},
	{
		name: 'Angular',
		path: 'angular',
		web: 'https://angular.io',
		frameworks: [{ name: 'Angular', path: 'angular', web: 'https://angular.io' }]
	},
	{
		name: 'React',
		path: 'react',
		web: 'https://reactjs.org',
		frameworks: [{ name: 'Next', path: 'next', web: 'https://nextjs.org' }]
	},
	{
		name: 'Vue',
		path: 'vue',
		web: 'https://vuejs.org',
		frameworks: [
			{ name: 'Nuxt', path: 'nuxt', web: 'https://nuxtjs.org' },
			{ name: 'Quasar', path: 'quasar', web: 'https://quasar.dev' }
		]
	}
];
