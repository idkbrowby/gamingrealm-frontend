<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	// user details
	export let username: string | undefined;
	export let follower_count: number = 0;
	export let following_count: number = 0;
	export let posts_count: number = 0;
	export let since: string | undefined;
	export let sameuser: boolean;
	export let is_following: boolean;
	// Date details
	let date = since ? since.slice(0, 10).split('-').reverse() : null;
	function numToMonth(num: string | null) {
		if (!num) return '';
		let months = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		];
		let month = parseInt(num);
		return months[month - 1];
	}
</script>

<div class="card">
	<div class="flex-col pt-12 p-6 space-y-4 w-full">
		<div class="flex-col lg:flex lg:flex-row justify-around">
			<div class="flex justify-center">
				<div class="flex-col space-y-1">
					<div class="flex justify-center">
						<Avatar
							src="https://avatars.githubusercontent.com/u/1004701?v=4"
							alt="username"
							initials={username}
							size="large"
						/>
					</div>
					<div class="flex font-bold justify-center">
						{username}
					</div>
				</div>
			</div>
			<div class="flex justify-center mt-4 pr-0 md:pr-8 lg:pr-0">
				<div class="flex md:flex-row flex-col w-2/3 justify-evenly lg:space-x-6">
					<div class="flex flex-row md:flex-col justify-evenly">
						<div class="hidden md:flex justify-center font-bold">{follower_count}</div>
						<div class="font-bold">Followers</div>
						<div class="flex md:hidden justify-center font-bold">{follower_count}</div>
					</div>
					<div class="flex flex-row md:flex-col justify-evenly">
						<div class="hidden md:flex justify-center font-bold">{following_count}</div>
						<div class="font-bold">Following</div>
						<div class="flex md:hidden justify-center font-bold">{following_count}</div>
					</div>
					<div class="flex flex-row md:flex-col justify-evenly">
						<div class="hidden md:flex justify-center font-bold">{posts_count}</div>
						<div class="font-bold">Posts</div>
						<div class="flex md:hidden justify-center font-bold">{posts_count}</div>
					</div>
				</div>
			</div>
		</div>
		<div class="hidden md:flex justify-center font-bold">
			A member of the Gaming Realm Community since
			{numToMonth(date[1])}
			{date ? date[2] : null}
		</div>
		{#if !sameuser}
			{#if is_following}
				<div class="flex justify-center font-bold">
					<button class="btn variant-filled">UnFollow</button>
				</div>
			{:else}
				<div class="flex justify-center font-bold">
					<button class="btn variant-filled">Follow</button>
				</div>
			{/if}
		{/if}
	</div>
</div>
