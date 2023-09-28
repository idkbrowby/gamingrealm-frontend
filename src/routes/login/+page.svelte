<script lang="ts">
	import BasicNavbar from '$lib/components/BasicNavbar.svelte';
	import Post from '$lib/components/post.svelte';
	import { onMount, onDestroy } from 'svelte';

	export let form: any = undefined;

	// picture switching function and attributes
	let picture: string = 'assets/image-4.png';
	let picNum: number = 1;

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
			console.log(picture);
		}, 2000);
	});
	onDestroy(() => {
		clearInterval(interval);
	});
	$: console.log(form);
</script>

<BasicNavbar />
<div class="py-10 flex my-auto h-5/6 w-full justify-center items-center">
	<div class="h-full w-2/3 lg:w-4/5 flex justify-center items-center">
		<div
			class=" space-y-8 p-10 h-full w-full bg-surface-100-800-token flex-col rounded-lg border-surface-200-900-token"
		>
			<strong class="text-6xl font-extrabold">Login</strong>

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
					<!-- link to signup -->
					<div>
						<strong>
							Don't have an account ? <a href="/signup" class="text-primary-800-100-token">
								Sign Up Here</a
							></strong
						>
					</div>
					<!-- Submit button -->
					<div class="pb-4">
						<button class="btn variant-filled">Login</button>
					</div>
				</div>
			</form>
		</div>
		<div class="hidden lg:flex h-full w-full">
			<img src={picture} alt="gamer" class="h-full rounded-r-lg" />
		</div>
	</div>
</div>
