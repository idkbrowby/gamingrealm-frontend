<script lang="ts">
	import { page } from '$app/stores';

	let menuactive = false;
	let signedin = $page.data.user != null;
	let username = $page.data.user ? $page.data.user.user.username : null;

	export async function deletecookie(){
		await fetch("/logout");
		window.location.reload();
	}
</script>
<nav class="w-full mx-auto bg-slate-800 pl-3 pr-3 py-2 rounded-b-lg">
	<div class="flex justify-between items-center h-10 px-2 ease-in-out">
		<!-- Logo -->
		<div class=" flex space-x-4 items-center text-primary fill-accents transition duration-200">
			<button class="flex pr-2 transition duration-200">
				<a
					href="/"
					class="flex font-mono font-extremebold  items-center text-white transition duration-200 "
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="fill-accents"
						class="w-10 h-10 transition duration-200 "
					>
						<path
							d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z"
						/>
					</svg>
					<!-- Name of Website -->
					<h1 class="px-2 hover:text-orange-300 text-2xl">Gaming Realm</h1>
				</a>
			</button>
		</div>
		{#if !signedin}
			
			<div class="flex h-full items-center py-1">
			<!-- Searchbar -->
			<div
				class=" hidden md:flex border border-white items-center rounded-lg  hover:bg-orange-400 transition duration-200 pr-0.5 "
			>
				<input
					type="text"
					id="Name"
					class="bg-gray-50 border font-mono py-1.5 text-gray-100 text-sm rounded-lg focus:ring-pink-300 focus:border-pink-500 block w-full p-2.5 dark:bg-gray-700 border-gray-600"
					placeholder="Search"
					required
				/>
				<button class="items-center ">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="white"
						class="w-6 h-6 pr-1 py-0.5"
					>
						<path
							fill-rule="evenodd"
							d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
							clip-rule="evenodd"
						/>
					</svg>
				</button>
			</div>
			<!-- Login and signup -->
			<div class="hidden md:flex justify-between rounded-xl pl-1.5 py-4 space-x-4 text-white font">
				<button
					class="transition duration-200  rounded-xl p-1 text-white hover:text-orange-200  flex items-center"
					><a href="/login" class="font-mono  font-semibold pr-2">Login</a><svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						class="w-5 h-5"
					>
						<path
							fill-rule="evenodd"
							d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z"
							clip-rule="evenodd"
						/>
						<path
							fill-rule="evenodd"
							d="M19 10a.75.75 0 00-.75-.75H8.704l1.048-.943a.75.75 0 10-1.004-1.114l-2.5 2.25a.75.75 0 000 1.114l2.5 2.25a.75.75 0 101.004-1.114l-1.048-.943h9.546A.75.75 0 0019 10z"
							clip-rule="evenodd"
						/>
					</svg>
				</button>
				<button
					class="bg-primary hover:bg-orange-200 hover:bg-opacity-75 transition duration-200 border-4 border-primary rounded-xl p-1 text-white hover:text-primary  flex items-center"
					><a href="/signup" class=" font-mono  font-semibold ">Signup</a></button
				>
			</div>
		</div>
		{:else}
			<!-- User Details -->

			<div class="flex h-full items-center py-1">
				<!-- Searchbar -->
				<div
					class=" hidden md:flex border border-white items-center rounded-lg  hover:bg-orange-400 transition duration-200 pr-0.5 "
				>
					<input
						type="text"
						id="Name"
						class="bg-gray-50 border font-mono py-1.5 text-gray-100 text-sm rounded-lg focus:ring-pink-300 focus:border-pink-500 block w-full p-2.5 dark:bg-gray-700 border-gray-600"
						placeholder="Search"
						required
					/>
					<button class="items-center ">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="white"
							class="w-6 h-6 pr-1 py-0.5"
						>
							<path
								fill-rule="evenodd"
								d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
								clip-rule="evenodd"
							/>
						</svg>
					</button>
				</div>
			<div
				class="hidden md:flex justify-between pl-4 rounded-xl space-x-5 text-white hover:text-orange-200 font-medium hover:font-medium font-mono"
			>
				<button class="items-center font-semibold" id="User">
					<a href="/user/{$page.data.user.user.id}">{username}</a> 
				</button>
			</div>
			<div class="hidden md:flex justify-between pl-4 rounded-xl space-x-5 text-white hover:text-orange-200 hover:font-medium font-mono font-semibold">
			<button on:click={deletecookie}>Logout</button>
			</div>
			</div>
		{/if}
		<!-- Mobile logo and Site name -->
		<div class="md:hidden flex items-center">
			<button on:click={() => (menuactive = !menuactive)}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="white"
					class="menu-button w-5 h-5 hover:fill-accents"
				>
					<path
						fill-rule="evenodd"
						d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
						clip-rule="evenodd"
					/>
				</svg>
			</button>
		</div>
	</div>
	<!-- mobile menu -->
	{#if menuactive}
		{#if window.innerWidth < 768}
			<div class="mobile-menu flex-col py-2  md:hidden transition duration-200 ease-in-out">
				<!-- searchbar mobile -->
				<div
					class=" flex border border-white items-center rounded-lg  hover:bg-accents transition duration-700 pr-0.5"
				>
					<input
						type="text"
						id="Name"
						class="bg-gray-50 border font-mono text-gray-100 text-sm rounded-lg focus:ring-pink-300 focus:border-pink-500 block w-full p-2.5 dark:bg-gray-700 border-gray-600"
						placeholder="Search"
						required
					/>
					<button class="items-center ">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="white"
							class="w-6 h-6 pr-1 py-0.5"
						>
							<path
								fill-rule="evenodd"
								d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
								clip-rule="evenodd"
							/>
						</svg>
					</button>
				</div>
				{#if !signedin}
					<!-- Login bar -->
					<div
						class=" px-2 pt-4 flex justify-between text-white hover:text-orange-200 font-semibold text-opacity-85"
					>
						<button class="w-full"
							><a href="/login" class="font-mono bold flex justify-between items-center"
								>Login <svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									class="w-5 h-5"
								>
									<path
										fill-rule="evenodd"
										d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z"
										clip-rule="evenodd"
									/>
									<path
										fill-rule="evenodd"
										d="M19 10a.75.75 0 00-.75-.75H8.704l1.048-.943a.75.75 0 10-1.004-1.114l-2.5 2.25a.75.75 0 000 1.114l2.5 2.25a.75.75 0 101.004-1.114l-1.048-.943h9.546A.75.75 0 0019 10z"
										clip-rule="evenodd"
									/>
								</svg></a
							>
						</button>
					</div>
					<!-- Signup Bar -->
					<div class="px-2 py-2 w-full text-white hover:text-orange-200 font-semibold text-opacity-85">
						<button class=" w-full justify-start"
							><a href="/signup" class="flex justify-start font-mono  w-full">Signup</a
							></button
						>
					</div>
				{:else}
					<!-- User details -->
					<div
						class=" px-2 pt-4 flex justify-between text-white hover:text-pink-400 text-opacity-85"
					>
						<button class="w-full"
							><a href="/user/{$page.data.user.user.id}" class="font-mono font-bold flex justify-between items-center"
								>{username}</a
							></button
						>
					</div>
					<div class=" px-2 pt-4 flex text-white hover:text-pink-400 text-opacity-85">
						
							<button class="w-full font-mono font-bold flex justify-between items-center" on:click={deletecookie}>
								Logout
							</button>
						
					</div>
				{/if}
			</div>
		{:else}
			menuactive = !menuactive;
		{/if}
	{/if}
</nav>
