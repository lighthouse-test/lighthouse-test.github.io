<script lang="ts">
	export let framework;
	export let category;
	export let path;
</script>

<a
	href={'https://lighthouse-test.github.io/' + framework.toLowerCase() + '/_lighthouse/' + path + '.report.html'}
	rel="external"
	target="_blank"
>
	<img
		src={'https://raw.githubusercontent.com/lighthouse-test/' +
			framework +
			'/gh-pages/_lighthouse/' +
			path +
			'.' +
			category +
			'.svg'}
	/>
</a>
