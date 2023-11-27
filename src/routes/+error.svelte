<script>
	import { page } from '$app/stores';
	let x = $page.error.status;
</script>

<div class="h-screen w-screen">
	<div class="flex items-center justify-center h-full">
		<h1 class="text-3xl font-light mt-1">{x === undefined ? 404 : x}</h1>
		<h1 class="mx-2 font-medium text-7xl mb-2">|</h1>
		<div class="flex items-center justify-center p-1">
			<h1 class="text-5xl text-bold text-warning-700">
				{$page.error.message.toUpperCase()}
			</h1>
		</div>
	</div>
</div>
