<script lang="ts">
	import { enhance } from '$app/forms';
	import BasicNavbar from '$lib/components/BasicNavbar.svelte';
	import { onMount } from 'svelte';
	export let form: any = undefined;
	$: console.log(form);
</script>

<BasicNavbar />
<div class="py-10 flex w-full max-h-5/6 justify-center items-center my-auto">
	<div class="h-full w-2/3 lg:w-4/5 flex justify-center items-center">
		<div
			class=" space-y-8 p-10 h-full w-full bg-surface-100-800-token flex-col rounded-lg border-surface-200-900-token"
		>
			<strong class="text-6xl font-extrabold">Sign Up</strong>

			<form method="POST" use:enhance>
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
							required
						/>
					</div>
					<!-- Confirm Password -->
					<div class="w-full flex-col space-y-2">
						<span class="text-xl">Password</span>
						<input
							type="password"
							id="confpass"
							name="confpass"
							placeholder="*********"
							class=" w-full variant-form-material"
							required
						/>
					</div>
				</div>
				<div class="flex-col space-y-4">
					<!-- Link to login -->
					<div>
						<strong>
							Already have an account ?
							<a class="text-primary-800-100-token" href="/login"> Login Here</a>
						</strong>
					</div>
					<!-- Submit Button -->
					<div>
						<button class="btn variant-filled">Sign Up</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</div>
