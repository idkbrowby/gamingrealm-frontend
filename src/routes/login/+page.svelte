<script lang="ts">
	import BasicNavbar from '$lib/components/BasicNavbar.svelte';
	import { enhance } from '$app/forms';
	import { onMount, onDestroy } from 'svelte';

	export let form;
	// picture switching function and attributes
	let picture: string = 'assets/image-4.png';
	let picNum: number = 4;
	let username: string = '';
	let password: string = '';

	function pictureSwitch(n: number): number {
		if (n < 5) {
			n = n + 1;
		} else {
			n = 1;
		}
		return n;
	}
	let interval: any;
	function onInterval(callback: () => void, milliseconds: number) {
		interval = setInterval(callback, milliseconds);
	}

	onMount(() => {
		onInterval(() => {
			picNum = pictureSwitch(picNum);
			let x = picNum.toString();
			let a = '';
			picture = a.concat('assets/image-', x, '.png');
		}, 2000);
	});
	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<BasicNavbar />
<div class="py-10 flex my-3 h-5/6 w-full justify-center items-center">
	<div class="h-full w-10/12 md:w-4/5 lg:w-4/5 flex justify-center items-center">
		<div
			class=" space-y-8 p-10 h-full w-full bg-surface-100-800-token flex-col rounded-lg border-surface-200-900-token"
		>
			<strong class="text-6xl font-extrabold">Login</strong>

			<form method="POST" action="login" use:enhance>
				<div class="space-y-4 py-4">
					<!-- Username -->
					<div class="w-full flex-col space-y-2">
						<span class="text-xl">Username</span>
						<input
							type="text"
							id="username"
							name="username"
							placeholder="Username"
							class=" w-full variant-form-material"
							bind:value={username}
							required
						/>
					</div>
					<!-- Password -->
					<div class="w-full flex-col space-y-2">
						<span class="text-xl">Password</span>
						<input
							type="password"
							id="password"
							name="password"
							placeholder="*********"
							class=" w-full variant-form-material"
							bind:value={password}
							required
						/>
					</div>
				</div>
				<div class="flex-col space-y-4">
					<!-- link to signup -->
					<div>
						<strong>
							Don't have an account ?<br class="md:hidden" />
							<a href="/signup" class="text-primary-800-100-token underline">
								Sign Up Here</a
							></strong
						>
					</div>
					{#if form?.message}
						<div class=" variant-filled-error flex p-2 m-auto">
							<strong>Username Or Password Is Invalid</strong>
						</div>
					{/if}
					<!-- Submit button -->
					<div class="pb-4">
						{#if /\s/.test(username) || password.length < 8}
							<button class="btn variant-filled" disabled>Login</button>
						{:else}
							<button class="btn variant-filled">Login</button>
						{/if}
					</div>
				</div>
			</form>
		</div>
		<div class="hidden xl:flex h-full w-full">
			<img src={picture} alt="gamer" class="h-full rounded-r-lg" />
		</div>
	</div>
</div>
