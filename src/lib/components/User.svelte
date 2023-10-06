<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';

	// user details
	export let username: string | undefined;
	export let follower_count: number = 0;
	export let following_count: number = 0;
	export let posts_count: number = 0;
	export let since: string | null = null;
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
		<div class="flex justify-center font-bold">
			a member since {since}
		</div>
	</div>
</div>
