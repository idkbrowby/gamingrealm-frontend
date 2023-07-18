<script lang="ts">
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
</script>

<AppShell>
	<svelte:fragment slot="header"
		><AppBar class="items-center font-gamer text-5xl"><a href="/">GamingRealm</a></AppBar
		></svelte:fragment
	><slot />

	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment></AppShell
>
