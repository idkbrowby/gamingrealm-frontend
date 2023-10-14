<script>
	import User from '$lib/components/User.svelte';
	import BasicNavbar from '$lib/components/BasicNavbar.svelte';
	export let data;
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
	{/if}
</div>
