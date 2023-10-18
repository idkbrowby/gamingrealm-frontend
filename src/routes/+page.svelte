<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Post from '$lib/components/post.svelte';
	import Loadingpost from '$lib/components/loadingpost.svelte';
</script>

<div class="h-full w-full flex-col space-y-6">
	<div><Navbar /></div>

	<div class="h-full w-full flex justify-center">
		<div class="flex-col flex w-full gap-2">
			<Post title="title" rating={4} description="description" author="author" />
			<Loadingpost />
		</div>
	</div>
</div>
