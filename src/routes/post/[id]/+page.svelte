<script lang="ts">
    import Postpage from "$lib/components/Postpage.svelte";

    export let data;

    let postId: string = data.post.id;
    let title: string = data.post.title;
    let authorId: string = data.post.author.id;
    let author: string = data.post.author.username;
    let rating: number = data.avgRating;
    let tags: string[] = data.post.media.map(x => x.tag_name);
    let description: string = data.post.text_content;
    let images: string[] = data.post.media.map(x => x.object_url);
</script>

<Postpage postId={postId} tags={tags} authorId={authorId} author={author} title={title} rating={rating} description={description} images={images} />