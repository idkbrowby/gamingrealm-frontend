<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Post from '$lib/components/post.svelte';
</script>

<div class="h-full w-full flex-col space-y-6">
	<div><Navbar /></div>

	<div class="h-full w-full flex justify-center">
		<div class="w-full">
			<Post title="title" rating={4} description="description" author="author" />
		</div>
	</div>
</div>
