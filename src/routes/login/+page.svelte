<script lang="ts">
	let agreedTnC = false;
	import Basicnavbar from "$lib/components/Basicnavbar.svelte";
</script>
<Basicnavbar/>
<div class="min-h-screen bg-slate-800 flex p-12 justify-center">
	<div class="flex items-cente justify-center">
		<div
			class="bg-slate-900 h-full p-10 w-full md:basis-1/2 rounded-xl md:rounded-l-2xl md:rounded-r-none flex-col justify-start"
		>
			<h1
				class=" py-10 basis-1/6 text-5xl justify-center font-mono font-extrabold text-start text-pink-400"
			>
				Login
			</h1>
			<form method="POST">
				<div class="py-2">
					<label for="username" class="block mb-2 text-sm font-medium font-mono text-gray-300"
						>Username</label
					>
					<input
						type="text"
						id="username"
						name="username"
						class="bg-gray-50 border font-mono text-gray-100 text-sm rounded-lg focus:ring-pink-300 focus:border-pink-500 block w-full p-2.5 dark:bg-gray-700 border-gray-600"
						placeholder="Praveen Raj"
						required
					/>
				</div>
				<div class="py-2">
					<label for="password" class="block mb-2 text-sm font-medium font-mono text-gray-300"
						>Password</label
					>
					<input
						type="password"
						id="password"
						name="password"
						class="bg-gray-50 border font-mono text-gray-100 text-sm rounded-lg focus:ring-pink-300 focus:border-pink-500 block w-full p-2.5 dark:bg-gray-700 border-gray-600"
						placeholder="Password"
						required
					/>
				</div>
				<div class="flex items-start mb-6 py-4">
					<div class="flex items-center h-5">
						<input
							id="remember"
							type="checkbox"
							bind:checked={agreedTnC}
							class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
							required
						/>
					</div>
					<label
						for="remember"
						class="ml-2 text-sm font-mono font-medium text-gray-900 dark:text-gray-400"
						>I agree with the <a href="/" class="text-blue-600 hover:underline dark:text-blue-500"
							>terms and conditions</a
						>.</label
					>
				</div>
				<button
					type="submit"
					disabled={!agreedTnC}
					class="text-white bg-pink-400 hover:bg-pink-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center disabled:bg-slate-500"
					>Submit</button
				>
				<p class="py-2 font-mono text-pink-200">
					Not a User? <a class=" hover:text-slate-100" href="/signup">Signup Here</a>
				</p>
			</form>
		</div>
		<div class="hidden md:flex w-full basis-1/2 overflow-hidden">
			<img src="gamer2.webp" alt="a gamer" class="w-full h-full rounded-r-2xl" />
		</div>
	</div>
</div>
