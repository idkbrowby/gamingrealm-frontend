<script lang="ts">
    import CommentScrollWindow from "./CommentScrollWindow.svelte";

    export let postId: string;
    export let title: string;
    export let authorId: string;
    export let author: string;
    export let rating: number;
    export let tags: string[];
    export let description: string;
    export let images: string[];

</script>
<div class="w-full h-auto flex border-2 border-white py-8 md:px-20 px-10">
    <div class="flex flex-col w-full  border-2 justify-start p-4 bg-slate-800 border-white rounded-xl space-y-4">
        <div class="flex flex-col bg-slate-500 p-4 rounded-xl">
            <!-- Author -->
            <div class="p-2 font-mono font-bold text-xl">
                <a href={`/user/${authorId}`}>{author}</a>
            </div>
            <!-- Image -->
            {#each images as image}
            <div class="p-2 flex justify-center">
                <img src={image} alt="Gamer post" class="max-w-40 h-80">
            </div>
            {/each}
            <!-- Title and rating bar -->
            <div class="flex justify-between items-center py-2 pl-2">
                <div class="flex font-mono font-bold text-3xl">
                    {title}
                </div>
                <div class="flex font-mono font-bold text-1/2xl">
                    rating : {rating} / 5
                </div> 
            </div>
            <!-- descriptions -->
            <div class="p-2 font-mono text-md">
                {description}
            </div>
            <!-- tags -->
            <div>

            </div>
        </div>
        <!-- Comments -->
        <div class="bg-slate-500 rounded-xl p-4 font-mono" >
            <CommentScrollWindow postId={postId} />
        </div>
    </div>
</div>