<script lang="ts">
	import { AppBar, Avatar, LightSwitch } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';

	let drawerOpen = false;
	let signedin = $page.data.user != null;
	let username = $page.data.user ? $page.data.user.username : null;
	export async function signout() {
		await fetch('/logout');
		window.location.reload();
	}
</script>

<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
	<svelte:fragment slot="lead">
		<button
			class="btn-icon"
			on:click={() => {
				drawerOpen = !drawerOpen;
				console.log(drawerOpen);
			}}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
				/>
			</svg>
		</button>
	</svelte:fragment>
	<strong class="text-2xl">
		<a href="/">Gaming Realm</a>
	</strong>
	<!-- <LightSwitch /> -->
	<svelte:fragment slot="trail">
		{#if signedin}
			<Avatar class="rounded-full" />
		{:else}
			<a href="/login"><button class="btn variant-filled">Login</button></a>
		{/if}
	</svelte:fragment>
</AppBar>
{#if drawerOpen}
	<div class="w-full bg-surface-100-800-token px-4 pb-4 rounded-b-lg border-surface-800-100-token">
		<!-- Search Bar -->
		<div class=" border hidden md:flex items-center rounded-lg border-surface-800-100-token">
			<input
				type="text"
				id="Name"
				class="rounded-l-lg border-none font-mono text-sm text-black block w-full"
				placeholder="Search"
				required
			/>

			<button
				type="button"
				class="py-1.5 px-0.5 mx-auto variant-filled-800-100-token rounded-l-none rounded-r-lg"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6 px-0.5"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
					/>
				</svg>
			</button>
		</div>
	</div>
{/if}
<div class="w-full" />
