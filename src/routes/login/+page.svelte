<script lang="ts">
	import BasicNavbar from '$lib/components/BasicNavbar.svelte';
	export let form: any = undefined;
	$: console.log(form);
</script>

<BasicNavbar />
<div class="flex h-full w-full justify-center items-center">
	<div
		class=" space-y-8 p-10 h-4/5 w-2/3 bg-surface-100-800-token flex-col rounded-lg border-surface-200-900-token"
	>
		<strong class="text-6xl font-extrabold">Login</strong>

		<form method="POST">
			<div class="space-y-4 py-4">
				<!-- Username -->
				<div class="w-full flex-col space-y-2">
					<span>Username</span>
					<input
						type="text"
						id="username"
						name="username"
						placeholder="Username"
						class=" w-full variant-form-material"
						required
					/>
				</div>
				<!-- Password -->
				<div class="w-full flex-col space-y-2">
					<span>Password</span>
					<input
						type="text"
						id="password"
						name="password"
						placeholder="*********"
						class=" w-full variant-form-material"
						required
					/>
				</div>
			</div>
			<button class="btn variant-filled">Login</button>
		</form>
	</div>
</div>
