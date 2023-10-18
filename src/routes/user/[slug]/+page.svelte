<script lang="ts">
	import { onMount } from 'svelte';
	import * as api from '$lib/api';
	import User from '$lib/components/User.svelte';
	import BasicNavbar from '$lib/components/BasicNavbar.svelte';
	import Posts from '$lib/components/Posts.svelte';
	import Loadingpost from '$lib/components/loadingpost.svelte';
	export let data;

	let batch: any[] = [];
	let newBatch: any[] = [];
	let loading: any[] | Promise<any[]>;
	let loaded: boolean = false;
	let cursor: string | undefined = undefined;
	async function fetchMore() {
		if (!loaded) {
			const res = await api.get_user_posts(data.id, 10, cursor);
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
		loading = fetchMore();
	});
	$: {
		batch = [...batch, ...newBatch];
	}
</script>

<div class="h-full w-full">
	<BasicNavbar />
	<div class="py-4 px-2 flex justify-center items-center">
		<div class="lg:w-full md:w-4/5 w-full">
			<User
				username={data.username}
				follower_count={data.follower_count}
				following_count={data.following_count}
				since={data.created_at}
				posts_count={data.posts_count}
				is_following={data.is_following}
				sameuser={data['sameuser']}
			/>
		</div>
	</div>
	{#if data.posts_count == 0}
		<div class="w-full flex items-center justify-center">
			<strong>This User has no Posts</strong>
		</div>
	{:else}
		<Posts {batch} />
		{#await loading}
			<div class=" card flex-col flex gap-2">
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
	{/if}
</div>
