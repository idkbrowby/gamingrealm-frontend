<script lang="ts">
	import { Avatar, LightSwitch } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';

	let drawerOpen = false;

	// Avatar Data
	let signedin = $page.data.user != null;
	let username = $page.data.user ? $page.data.user.username : null;
	let initials = $page.data.user ? $page.data.user.username.slice(0, 2) : null;

	// SearcBbar Data
	let search: string;
	export async function signout() {
		await fetch('/logout');
		window.location.reload();
	}
</script>

<div class=" w-full flex items-center justify-between bg-surface-100-800-token py-4 px-4">
	<div class="">
		<button
			class="btn-icon lg:hidden"
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

		<strong class="text-2xl lg:flex hidden">
			<a href="/">Gaming Realm</a>
		</strong>
	</div>
	<div class="lg:w-1/2">
		<strong class="text-2xl flex lg:hidden">
			<a href="/">Gaming Realm</a>
		</strong>
		<!-- <LightSwitch /> -->
		<div class=" border hidden lg:flex items-center w-full rounded-lg border-surface-800-100-token">
			<input
				type="text"
				id="Name"
				class="rounded-l-lg border-none font-mono text-sm block w-full"
				placeholder="Search"
				bind:value={search}
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
	<div class="">
		{#if signedin}
			<Avatar {initials} class="rounded-full h-14 w-14" />
		{:else}
			<a href="/login"><button class="btn variant-filled">Login</button></a>
		{/if}
	</div>
</div>

{#if drawerOpen}
	<div
		class="w-full bg-surface-100-800-token px-4 pb-4 rounded-b-lg border-surface-800-100-token lg:hidden"
	>
		<!-- Search Bar -->
		<div class=" border flex lg:hidden items-center rounded-lg border-surface-800-100-token">
			<input
				type="text"
				id="Name"
				class="rounded-l-lg border-none font-mono text-sm text-black block w-full"
				placeholder="Search"
				bind:value={search}
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
