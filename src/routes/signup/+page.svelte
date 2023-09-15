<script lang="ts">
	import BasicNavbar from '$lib/components/BasicNavbar.svelte';
	import { onMount } from 'svelte';
	export let form: any = undefined;
	let picture: string = 'src/lib/assets/image-4.png';
	let picNum: number = 1;
	function pictureSwitch(n: number) {
		if (n < 5) {
			n = n + 1;
		} else {
			n = 1;
		}
		return n;
	}
	onMount(() => {
		setInterval(() => {
			picNum = pictureSwitch(picNum);
			let x = picNum.toString();
			let a = '';
			picture = a.concat('src/lib/assets/image-', x, '.png');
			console.log(picture);
		}, 2000);
	});
	$: console.log(form);
</script>

<BasicNavbar />
<div class="py-10 flex h-full w-full justify-center items-center">
	<div class="h-full w-2/3 lg:w-4/5 flex justify-center items-center">
		<div
			class=" space-y-8 p-10 h-full w-full bg-surface-100-800-token flex-col space-y-3 rounded-lg border-surface-200-900-token"
		>
			<strong class="text-6xl font-extrabold">Sign Up</strong>

			<form method="POST">
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
							id="emailid"
							name="emailid"
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
				</div>
				<div class="flex-col space-y-4">
					<div>
						<strong>
							Already have an account ?
							<a class="text-primary-800-100-token" href="/login"> Login Here</a>
						</strong>
					</div>
					<div>
						<button class="btn variant-filled">Sign Up</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</div>
