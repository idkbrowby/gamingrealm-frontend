<script lang="ts">
	let agreedTnC: boolean = false;
</script>

<div class="min-h-screen min-w-full flex p-12 justify-center">
	<div class="flex items-center justify-center w-1/2">
		<div class=" h-full p-10 w-full flex-col justify-start">
			<h1 class=" py-10 basis-1/6 text-5xl justify-center text-start">Login</h1>
			<form method="POST" action="?/login">
				<div class="py-2">
					<label for="username" class="block mb-2">Username</label>
					<input
						type="text"
						id="username"
						name="username"
						class=" border rounded-lg block w-full p-2.5"
						placeholder="Username"
						required
					/>
				</div>
				<div class="py-2">
					<label for="password" class="block mb-">Password</label>
					<input
						type="password"
						id="password"
						name="password"
						class=" border rounded-lg block w-full p-2.5"
						placeholder="********"
						required
					/>
				</div>
				<div class="flex items-start mb-6 py-4">
					<div class="flex items-center h-5">
						<input
							id="remember"
							type="checkbox"
							bind:checked={agreedTnC}
							class="w-4 h-4 rounded border"
							required
						/>
					</div>
					<label for="remember" class="ml-2 text-sm font-medium"
						>I agree with the <a href="/" class="hover:underline">terms and conditions</a>.</label
					>
				</div>
				<button type="submit" disabled={!agreedTnC} class="btn btn-lg variant-filled">Submit</button
				>
				<p class="py-2">
					Not a User? <a class="" href="/signup">Signup Here</a>
				</p>
			</form>
		</div>
	</div>
</div>
