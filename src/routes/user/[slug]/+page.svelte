<script>
	import User from '$lib/components/User.svelte';
	import BasicNavbar from '$lib/components/BasicNavbar.svelte';
	export let data;
</script>

<div class="h-full w-full">
	<BasicNavbar />
	<div class="py-4 px-2 flex justify-center items-center">
		<div class="lg:w-1/2">
			<User
				username={data.username}
				follower_count={data.follower_count}
				following_count={data.following_count}
				since={data.created_at}
				posts_count={data.posts_count}
			/>
		</div>
	</div>
</div>
