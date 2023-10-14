<script lang="ts">
	import { enhance } from '$app/forms';
	import BasicNavbar from '$lib/components/BasicNavbar.svelte';

	// variables for validation
	let username: string = '';
	let pass: string = '';
	let confpass: string = '';
	let tncagreed: boolean = false;
	export let form;
	$: console.log(form?.message);
</script>

<BasicNavbar />
<div class="py-10 flex w-full max-h-5/6 justify-center items-center my-3">
	<div class="h-full w-10/12 md:w-10/12 lg:w-4/5 flex justify-center items-center">
		<div
			class=" space-y-8 p-10 h-full w-full bg-surface-100-800-token flex-col rounded-lg border-surface-200-900-token"
		>
			<strong class="text-4xl md:text-6xl font-extrabold">Sign Up</strong>

			<form method="POST" use:enhance autocomplete="off">
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
							required
							bind:value={username}
						/>
					</div>
					<!-- Email ID -->
					<div class="w-full flex-col space-y-2">
						<span class="text-xl">Email Address </span>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="email.id@address.com"
							class=" w-full variant-form-material"
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
							bind:value={pass}
							required
						/>
					</div>
					<!-- Confirm Password -->
					<div class="w-full flex-col space-y-2">
						<span class="text-xl">Confirm Password</span>
						<input
							type="password"
							id="confpass"
							name="confpass"
							placeholder="*********"
							class=" w-full variant-form-material"
							bind:value={confpass}
							required
						/>
					</div>
				</div>
				<div class="flex-col space-y-4">
					<!-- Link to login -->

					<div class=" space-x-2">
						<label for="tncagreed" class="cursor-pointer">
							<input
								type="checkbox"
								id="tncagreed"
								name="tncagreed"
								bind:checked={tncagreed}
								required
								class="mr-2"
							/>
							I agree to the
							<strong
								><br class="md:hidden" /><a class="text-primary-800-100-token underline" href="#">
									Terms and Conditions</a
								></strong
							></label
						>
					</div>
					{#if form?.message}
						<div class=" variant-filled-error flex p-2">
							<strong>This account already exists</strong>
						</div>
					{/if}
					<!-- Submit Button -->
					<div>
						{#if /\s/.test(username) || pass.length < 8 || pass != confpass}
							<button class="btn variant-filled" disabled>Sign Up</button>
						{:else}
							<button class="btn variant-filled">Sign Up</button>
						{/if}
					</div>
				</div>
			</form>
			<div class="flex">
				<strong>
					Already have an account ?
					<a class="text-primary-800-100-token underline" href="/login"> Login Here</a>
				</strong>
			</div>
		</div>
	</div>
</div>
