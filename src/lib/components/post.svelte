<script lang="ts">
	export let title: string;
	export let rating: number;
	export let description: string;
	export let author: string;

	let initials = author.slice(0, 2);
	import { Avatar } from '@skeletonlabs/skeleton';
</script>

<div class="flex-col p-2 w-full bg-surface-800-100-token text-surface-100-800-token">
	<div class="flex w-full justify-between">
		<div>
			<a href="/profile/{author}">
				<div class="flex gap-2 items-center">
					<div><Avatar {initials} class="h-8 w-8" /></div>
					<div>{author}</div>
				</div>
			</a>
		</div>
		<div>{title}</div>
	</div>

	{rating}
	{description}
</div>
