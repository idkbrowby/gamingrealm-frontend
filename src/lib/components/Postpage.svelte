<script lang="ts">
    import { DateTime } from "luxon";
    import InfiniteScroll from "./InfiniteScroll.svelte";
    export let title:string;
    export let author:string;
    export let rating : number;
    export let description: string;
    export let image : url; 
</script>
<div class="w-full h-screen flex border-2 border-white py-8 px-20">
    <div class="flex flex-col w-full  border-2 justify-start p-2 bg-slate-800 border-white rounded-xl">
        <div class="flex flex-col bg-slate-500 p-4 rounded-xl">
            <!-- Author -->
            <div class="p-2 font-mono font-bold text-xl">
                {author}
            </div>
            <!-- Image -->
            <div class="p-2 flex justify-center">
                {image}
            </div>
            <!-- Title and rating bar -->
            <div class="flex justify-between py-2 pl-2">
                <div class="flex font-mono font-bold text-xl">
                    {title}
                </div>
                <div class="flex font-mono font-bold text-1/2xl">
                    rated at :{rating}
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
        <div class="bg-slate-500" >
            <!-- <div class="py-2">
                <ul class="flex flex-col w-full space-y-2 max-h-screen list-none overflow-x-scroll">
                    {#each data as item}
                    <a href="">
                        <button class="w-full flex flex-col ">
                        <div class="p-2 bg-slate-500 rounded-md ">
                            <li class="flex text-md font-bold text-2xl">
                                {item.title}
                            </li>
                            <li class="flex flex-wrap py-2 break-words">
                                {item.text_content.slice(0,75)}...
                            </li>
                            <li class="flex">
                            Post created at : {DateTime.fromISO(item.created_at).toLocaleString(DateTime.DATETIME_MED)}
                            </li> 
                        </div>
                    </button>
                    </a>
                    {/each}
                    <InfiniteScroll
                    hasMore={newBatch.length}
                    threshold={100}
                    on:loadMore={() => {cursorid=fetchData()}} />
                </ul>
            </div> -->
        </div>
    </div>
</div>