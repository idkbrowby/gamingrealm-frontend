<script lang="ts">
	export let data: any[] = [];
	import Post from '$lib/components/post.svelte';
</script>

<div class="card flex-col flex">
	{#each data as post}
		<div class="my-2">
			<Post
				title={post.title}
				description={post.text_content}
				rating={post.ratings}
				author={post.author.username}
				author_id={post.author.id}
			/>
		</div>
	{/each}
</div>
