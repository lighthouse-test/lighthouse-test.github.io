import type Tag from "$lib/interfaces/tag";
import type Framework from "$lib/interfaces/framework";

export const URL = 'https://lighthouse-test.github.io';

export const MODES = [
	{ name: 'SPA', slug: 'spa' },
	{ name: 'SSR', slug: 'ssr' },
	{ name: 'Static', slug: 'static' }
];

export const CATEGORIES = [
	{ name: 'Performance', slug: 'performance' },
	{ name: 'Accessibility', slug: 'accessibility' },
	{ name: 'Best Practices', slug: 'best-practices' },
	{ name: 'SEO', slug: 'seo' },
	{ name: 'PWA', slug: 'pwa' }
];

export const TECH_TAGS: Tag[] = [
	{
		name: 'Svelte',
		slug: 'svelte',
		web: 'https://svelte.dev'
	},
	{
		name: 'Angular',
		slug: 'angular',
		web: 'https://angular.io'
	},
	{
		name: 'React',
		slug: 'react',
		web: 'https://reactjs.org'
	},
	{
		name: 'Vue',
		slug: 'vue',
		web: 'https://vuejs.org'
	}
];

export const DESIGN_TAGS: Tag[] = [];


export const FRAMEWORKS: Framework[] = [
	{
		name: 'SvelteKit', slug: 'sveltekit', web: 'https://kit.svelte.dev',
		techTag: TECH_TAGS.filter(tag => tag.slug === 'svelte')[0],
		modes: { spa: true, ssr: true, static: true }
	},
	{
		name: 'Sapper', slug: 'sapper', web: 'https://sapper.svelte.dev',
		techTag: TECH_TAGS.filter(tag => tag.slug === 'svelte')[0],
		modes: { spa: false, ssr: true, static: true }
	},
	{
		name: 'Angular', slug: 'angular', web: 'https://angular.io',
		techTag: TECH_TAGS.filter(tag => tag.slug === 'angular')[0],
		modes: { spa: true, ssr: true, static: true }
	},
	{
		name: 'Next', slug: 'next', web: 'https://nextjs.org',
		techTag: TECH_TAGS.filter(tag => tag.slug === 'react')[0],
		modes: { spa: true, ssr: true, static: true }
	},
	{
		name: 'Gatsby', slug: 'gatsby', web: 'https://www.gatsbyjs.com',
		techTag: TECH_TAGS.filter(tag => tag.slug === 'react')[0],
		modes: { spa: false, ssr: false, static: true }
	},
	{
		name: 'Nuxt', slug: 'nuxt', web: 'https://nuxtjs.org',
		techTag: TECH_TAGS.filter(tag => tag.slug === 'vue')[0],
		modes: { spa: true, ssr: true, static: true }
	},
	{
		name: 'Quasar', slug: 'quasar', web: 'https://quasar.dev',
		techTag: TECH_TAGS.filter(tag => tag.slug === 'vue')[0],
		modes: { spa: true, ssr: true, static: true }
	}
]