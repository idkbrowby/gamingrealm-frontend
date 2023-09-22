<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	// Highlight JS
	import hljs from 'highlight.js';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	storeHighlightJs.set(hljs);

	// asset loading
	let images = [
		'/assets/image-1.png',
		'/assets/image-2.png',
		'/assets/image-3.png',
		'/assets/image-4.png',
		'/assets/image-5.png'
	];
</script>

<svelte:head>
	{#each images as item}
		<link as="image" href={item} rel="preload" class="h-full rounded-r-lg" />
	{/each}
</svelte:head>
<AppShell>
	<slot />
	<svelte:fragment slot="footer">Footer</svelte:fragment>
</AppShell>
