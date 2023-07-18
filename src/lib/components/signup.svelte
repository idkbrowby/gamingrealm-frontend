<script lang="ts">
	let agreedTnC = false;
	let pass: string;
	let confpass: string;
</script>

<div class="blur-sm z-0 min-w-full min-h-full">
	<section class="grid grid-cols-4 lg- gap-2 min-w-full overflow-hidden min-h-full absolute">
		<div class="grid gap-4">
			<div>
				<img
					class="h-auto min-w-full rounded-lg"
					src="https://images.unsplash.com/photo-1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&ixlib=rb-4.0.3&w=300&h=300&auto=format&fit=max"
					alt="loading"
				/>
			</div>
			<div>
				<img
					class="h-auto min-w-full rounded-lg"
					src="https://images.unsplash.com/photo-1597077962467-be16edcc6a43?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY2MzZ8&ixlib=rb-4.0.3&w=300&h=300&auto=format&fit=max"
					alt=""
				/>
			</div>
			<div>
				<img
					class="h-auto min-w-full rounded-lg"
					src="https://images.unsplash.com/photo-1591775161903-497839a443c1?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY3MzR8&ixlib=rb-4.0.3&w=300&h=300&auto=format&fit=max"
					alt=""
				/>
			</div>
		</div>
		<div class="grid gap-4">
			<div>
				<img
					class="h-auto min-w-full rounded-lg"
					src="https://images.unsplash.com/photo-1617296539691-67feaadf389e?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY3NjF8&ixlib=rb-4.0.3&w=300&h=300&auto=format&fit=max"
					alt=""
				/>
			</div>
			<div>
				<img
					class="h-auto min-w-full rounded-lg"
					src="https://images.unsplash.com/photo-1542835435-4fa357baa00b?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY3NzN8&ixlib=rb-4.0.3&w=300&h=300&auto=format&fit=max"
					alt=""
				/>
			</div>
			<div>
				<img
					class="h-auto min-w-full rounded-lg"
					src="https://images.unsplash.com/photo-1553184570-557b84a3a308?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY2NTF8&ixlib=rb-4.0.3&w=300&h=300&auto=format&fit=max"
					alt=""
				/>
			</div>
		</div>
		<div class="grid gap-4">
			<div>
				<img
					class="h-auto min-w-full rounded-lg"
					src="https://images.unsplash.com/photo-1603855873822-0931a843ee3a?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY3ODJ8&ixlib=rb-4.0.3&w=300&h=300&auto=format&fit=max"
					alt=""
				/>
			</div>
			<div>
				<img
					class="h-auto min-w-full rounded-lg"
					src="https://images.unsplash.com/photo-1509130446053-899ae7358ce6?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY2NjF8&ixlib=rb-4.0.3&w=300&h=300&auto=format&fit=max"
					alt=""
				/>
			</div>
			<div>
				<img
					class="h-auto min-w-full rounded-lg"
					src="https://images.unsplash.com/photo-1508931133503-b1944a4ecdd5?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY3OTV8&ixlib=rb-4.0.3&w=300&h=300&auto=format&fit=max"
					alt=""
				/>
			</div>
		</div>
		<div class="grid gap-4">
			<div>
				<img
					class="h-auto min-w-full rounded-lg"
					src="https://images.unsplash.com/photo-1633053663400-655b31fb88ac?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY4MDV8&ixlib=rb-4.0.3&w=300&h=300&auto=format&fit=max"
					alt=""
				/>
			</div>
			<div>
				<img
					class="h-auto min-w-full rounded-lg"
					src="https://images.unsplash.com/photo-1578170222009-c7893aa20afd?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY4MTZ8&ixlib=rb-4.0.3&w=300&h=300&auto=format&fit=max"
					alt=""
				/>
			</div>
			<div>
				<img
					class="h-auto min-w-full rounded-lg"
					src="https://images.unsplash.com/photo-1610220941077-1ec123e7c043?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY4NjV8&ixlib=rb-4.0.3&w=300&h=300&auto=format&fit=max"
					alt=""
				/>
			</div>
		</div>
	</section>
</div>

<div class="min-h-screen flex p-12 justify-center relative">
	<div class="flex items-center justify-center">
		<div class=" h-full p-10 w-full rounded-xl rounded-l-2xl flex-col justify-center">
			<h1 class="py-10 basis-1/6 text-5xl font-extrabold text-start">Signup</h1>
			<form method="POST">
				<div class="py-2">
					<label for="Emailid" class="block mb-2 text-sm font-medium font-mono text-gray-300"
						>Email Id</label
					>
					<input
						type="text"
						name="email"
						id="Emailid"
						class="p-2.5 w-full rounded-lg border variant-filled text-sm"
						placeholder="gamer@gaminghub.com"
						required
					/>
				</div>
				<div class="py-2">
					<label for="username" class="block mb-2 text-sm font-medium font-mono text-gray-300"
						>Username</label
					>
					<input
						type="text"
						name="username"
						id="username"
						class="p-2.5 w-full rounded-lg border variant-filled text-sm"
						placeholder="Praveen"
						required
					/>
				</div>
				<div class="py-2">
					<label for="password" class="block mb-2 text-sm font-medium font-mono text-gray-300"
						>Password</label
					>
					<input
						type="password"
						name="password"
						id="password"
						class="p-2.5 w-full rounded-lg border variant-filled text-sm"
						bind:value={pass}
						placeholder="Password"
						required
					/>
				</div>
				<div class="py-2">
					<label for="password" class="block mb-2 text-sm font-medium font-mono text-gray-300"
						>Confirm Password</label
					>
					<input
						type="password"
						id="password"
						class="p-2.5 w-full rounded-lg border variant-filled text-sm"
						bind:value={confpass}
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
						>I agree with the <a
							href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
							class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a
						>.</label
					>
				</div>
				{#if pass != confpass}
					<div class="pb-2">
						<h1 class="  font-semibold">Passwords Do Not Match!!</h1>
					</div>
					<button
						type="submit"
						disabled
						class=" rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center variant-filled"
						>Submit</button
					>
				{:else}
					<button
						type="submit"
						disabled={!agreedTnC}
						class=" rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center variant-filled"
						>Submit</button
					>
				{/if}
				<p class="py-2">
					Already a User? <a class=" hover:font-accent" href="/login">Login Here</a>
				</p>
			</form>
		</div>
	</div>
</div>
