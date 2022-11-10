<script lang="ts">
    import { DateTime } from "luxon";
    import {onMount} from "svelte";
	import InfiniteScroll from "./InfiniteScroll.svelte";
    import * as api from "../api";
	// store all the data here.
	let data = [];
	// store the new batch of data here.
	let newBatch = [];

	let cursorid=null;	
    async function fetchTags(){
        let response = await api.get("tags");
        let tags = await response.json();
        return tags;
    }
    async function fetchData() {
        const headers = new Headers();
        if (cursorid!=null){
            headers.set("cursor",cursorid);
        }
        else{
            const headers=null;
        }
		const response = await api.get("post",headers);
        const responsedata = await response.json();
		newBatch =  responsedata.data;
		cursorid = responsedata.cursor_id;
        console.log(responsedata.cursor_id);
        console.log(newBatch);
        console.log(cursorid);
        return cursorid;
	};
    let test;
	
	onMount(()=> {
		// load first batch onMount
		fetchData();
	})

  $: data = [
		...data,
    ...newBatch
  ];
  console.log(data);
</script>
<div class=" py-4 px-4 w-full flex justify-between text-white font-mono ">
    <div class=" flex w-full justify-between space-x-4  ">
        
        <div class="w-full flex-col justify-center rounded-xl space-y-2 bg-slate-800 p-4">
            <a href="/post/create">
                <button class="w-full">
                    <div class="w-full border-2 py-2 text-3/2xl  bg-slate-500 hover:bg-orange-200 flex-col hover:shadow-gray-500 justify-center font-semibold hover:border-white rounded-lg" id="createpost">
                        Create post
                    </div>
                </button>
            </a>
            <!--Posts -->
            <div class="flex flex-col h-full w-full">
                <div class="py-2">
                    <ul class="flex flex-col w-full space-y-2 max-h-screen list-none overflow-x-scroll">
                        {#each data as item}
                        <a href="#">
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
                </div>
            </div>
        </div>
        <div class="hidden md:flex flex-col bg-slate-800 p-4 basis-1/3 items-center rounded-xl space-y-2">
            <h1 class="font-semibold">Tags</h1>
            <div class="py-8 justify-center items-center space-y-2">
                <div class = "flex flex-wrap justify-center ">
                    {#await fetchTags()}
                        <h1>Getting tags</h1>
                    {:then tags} 
                        {#each tags as tag}
                    
                        <div class="p-2">
                            <a href=""><button class="border-2 rounded-lg bg-slate-500 p-2">{tag.tag_name}</button></a>
                        </div>
                    
                    {/each}
                    {/await}
                </div>
            </div>
        </div>
        
    </div>
    
</div>
