<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<div class="h-full w-full flex-col space-y-6">
	<div><Navbar /></div>

	<div class="h-full w-full flex justify-center">
		<div class="flex-col flex w-full gap-2" />
		<button class="btn">
			<a href="/feed">feed</a>
		</button>
	</div>
</div>
