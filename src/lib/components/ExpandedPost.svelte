<script lang="ts">
	export let imageurl: string;
	export let title: string;
	export let description: string;
	export let username: string;
	export let rating: number;
	import { Avatar } from '@skeletonlabs/skeleton';
</script>

<div class="card w-full p-2">
	<div class="flex-col flex">
		<div class="flex">
			<div>
				<Avatar initial={username} class="w-4 h-4" />
			</div>
			{username}
		</div>
		<div>
			<img src={imageurl} alt={title} class="w-full" />
		</div>
		<div class="">
			<div class="text-xl">{title}</div>
			<div class="text-sm">{description}</div>
			<div class="text-sm">{rating}</div>
		</div>
	</div>
</div>
