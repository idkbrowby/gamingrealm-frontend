<script lang="ts">
	import Makepost from '$lib/components/makepost.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<div class="z-10">
	<Navbar />
</div>
<div class="h-screen w-full flex z-2 justify-center">
	<Makepost />
</div>
