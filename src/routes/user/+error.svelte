<script>
	import { page } from '$app/stores';
</script>

<h1>{$page.data.status}: {$page.error?.message}</h1>
