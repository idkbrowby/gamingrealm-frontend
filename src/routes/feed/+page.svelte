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
	let loading: any[];
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
		return Promise.resolve(newBatch);
	}

	onMount(async () => {
		loading = await fetchMore();
	});
	$: {
		data = [...data, ...newBatch];
	}
</script>

<div class="z-10">
	<Navbar />
</div>
{#each data as post}
	<Post
		title={post.title}
		description={post.text_content}
		rating={post.ratings}
		author={post.author.username}
		author_id={post.author.id}
	/>
{/each}
{#await loading}
	<div class="flex-col flex my-2 gap-2">
		<Loadingpost /><Loadingpost /><Loadingpost /><Loadingpost />
		<Loadingpost /><Loadingpost /><Loadingpost /><Loadingpost />
		<Loadingpost /><Loadingpost />
	</div>
{:catch error}
	<div class="card p-4 w-full">An Error occurred while loading posts</div>
{/await}
{#if !loaded}
	<div class="w-full flex justify-center">
		<button
			on:click={async () => {
				loading = await fetchMore();
			}}
			class="m-4 btn variant-filled-success">Fetch More</button
		>
	</div>
{/if}
