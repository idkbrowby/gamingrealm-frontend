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
	<div class="flex-col pt-12 p-6 space-y-4">
		<div class="flex justify-around items-center">
			<div class="flex">
				<div class="flex-col space-y-1">
					<div class="flex justify-center">
						<Avatar
							src="https://ava justify-middletars.githubusercontent.com/u/1004701?v=4"
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
			<div class="flex w-1/2 justify-evenly">
				<div class="flex-col">
					<div class="flex justify-center font-bold">{follower_count}</div>
					<div class="font-bold">Followers</div>
				</div>
				<div class="flex-col">
					<div class="flex justify-center font-bold">{following_count}</div>
					<div class="font-bold">Following</div>
				</div>
				<div class="flex-col">
					<div class="flex justify-center font-bold">{posts_count}</div>
					<div class="font-bold">Posts</div>
				</div>
			</div>
		</div>
		<div class="flex justify-center font-bold">
			a member since {since}
		</div>
	</div>
</div>
