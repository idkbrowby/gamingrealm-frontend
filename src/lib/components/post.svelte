<script lang="ts">
	export let title: string;
	export let rating: number;
	export let description: string;
	export let author: string;
	export let author_id: string;
	export let post_id: string;

	let initials = author.slice(0, 2);
	import { Avatar } from '@skeletonlabs/skeleton';
</script>

<div class=" card flex-col p-2 w-full bg-surface-800-100-token text-surface-100-800-token">
	<div class="flex my-2 w-full justify-between">
		<div>
			<a href="/user/{author_id}">
				<div class="flex gap-2 items-center">
					<div><Avatar {initials} class="h-8 w-8" /></div>
					<div>{author}</div>
				</div>
			</a>
		</div>
		<a href="/post/{post_id}"> <div>{title}</div></a>
	</div>

	{rating}
	{description}
</div>
