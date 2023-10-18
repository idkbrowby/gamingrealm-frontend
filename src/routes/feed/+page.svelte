<script lang="ts">
	import BasicNavbar from '$lib/components/BasicNavbar.svelte';
	import Makepost from '$lib/components/makepost.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Post from '$lib/components/post.svelte';
	import Loadingpost from '$lib/components/loadingpost.svelte';
	import * as api from '../../lib/api';
	import { onMount } from 'svelte';

	let data: any[] = [];
	let newBatch: any[] = [];
	let loaded: boolean = false;
	let cursor: string | undefined = undefined;
	async function fetchMore() {
		if (!loaded) {
			const res = await api.get_posts(10, cursor);
			if (res.data) {
				loaded = res.data.count !== 10;
				cursor = res.data.cursor_id;
				newBatch = res.data.data;
			}
			console.log(newBatch[0]);
		}
	}
	$: {
		data = [...data, ...newBatch];
	}
	onMount(async () => {
		fetchMore();
	});
</script>

<div class="z-10">
	<Navbar />
</div>
{#await data}
	<div class="flex-col flex my-2 gap-2">
		<Loadingpost /><Loadingpost /><Loadingpost /><Loadingpost /><Loadingpost />
	</div>
{:then data}
	{#each data as post}
		{post.title}
	{/each}
	<!-- promise was fulfilled -->
{/await}
{#each data as item}
	<div>
		{item.id}
	</div>
	<!-- content here -->
{/each}
<div class="w-full flex justify-center">
	<button on:click={fetchMore} class="m-4 btn variant-filled-success">Fetch More</button>
	<!-- <div class="h-screen w-full flex z-2 justify-center">
	<Makepost />
</div> -->
</div>
