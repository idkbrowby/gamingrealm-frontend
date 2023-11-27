<script>
	import { page } from '$app/stores';
</script>

<div class="h-screen w-screen">
	<div class="flex flex-col items-center justify-center h-full text-9xl text-error-800">
		<h1>
			{$page.error.message.toUpperCase()}
		</h1>
	</div>
</div>
