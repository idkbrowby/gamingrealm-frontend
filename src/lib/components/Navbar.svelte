<script lang="ts">
	import { Avatar, LightSwitch, popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';

	let drawerOpen = false;

	// Avatar Data
	let signedin = $page.data.user != null;
	let user = $page.data.user ? $page.data.user : null;
	let initials = $page.data.user ? $page.data.user.username.slice(0, 2) : null;

	// Logout function
	async function logout() {
		await fetch('/logout');
		location.reload();
	}

	const popupFeatured: PopupSettings = {
		// Represents the type of event that opens/closed the popup
		event: 'click',
		// Matches the data-popup value on your popup element
		target: 'popupFeatured',
		// Defines which side of your trigger the popup will appear
		placement: 'bottom'
	};

	// SearcBbar Data
	let search: string;
</script>

<div class=" w-full flex items-center justify-between bg-surface-100-800-token py-4 px-4">
	<div class="">
		<button
			class="btn-icon lg:hidden"
			on:click={() => {
				drawerOpen = !drawerOpen;
			}}
		>
			<svg
				data-darkreader-inline-stroke=""
				aria-hidden="true"
				fill="none"
				stroke="currentColor"
				stroke-width="1.5"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					stroke-linecap="round"
					stroke-linejoin="round"
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
		{#if signedin}
			<!-- user dropdown -->
			<div
				class="card px-4 py-2 w-72 shadow-xl border-surface-900-50-token border-2 flex-col gap"
				data-popup="popupFeatured"
			>
				<div class="">
					<a href="/user/{user.id}"
						><div class="flex justify-between btn px-1">
							<div><strong>Profile</strong></div>
							<div>
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
										d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
									/>
								</svg>
							</div>
						</div></a
					>
				</div>
				<div class="flex justify-between p-1">
					<div><strong class="">Theme</strong></div>

					<div>
						<LightSwitch />
					</div>
				</div>
				<div class="py-3">
					<button
						class="flex w-full justify-center btn px-1 variant-filled-error"
						on:click={logout}
					>
						<div class="w-full"><strong class="">Logout</strong></div>
					</button>
				</div>
				<div
					class="arrow bg-surface-100-800-token border-surface-900-50-token border-l-2 border-t-2"
				/>
			</div>
		{/if}
	</div>
	<div class="">
		{#if signedin}
			<button use:popup={popupFeatured}><Avatar {initials} class="rounded-full h-14 w-14" /></button
			>
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
