<script lang="ts">
	export let data: any[] = [];
	import Post from '$lib/components/post.svelte';
</script>

{#if data.length !== 0}
	<div class="card flex-col flex p-2">
		{#each data as post}
			<div class="my-2 w-full">
				<Post
					title={post.title}
					description={post.text_content}
					rating={post.ratings}
					author={post.author.username}
					author_id={post.author.id}
					post_id={post.id}
				/>
			</div>
		{/each}
	</div>
{/if}
