<script lang="ts">
    
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
</script>
<div class=" py-4 px-4 w-full flex justify-between text-white font-mono ">
    <div class=" flex w-full justify-between space-x-4  ">
        
        <div class="w-full flex-col justify-center rounded-xl space-y-2 bg-slate-800 p-4">
            <a href="/post/create">
                <button class="w-full">
                    <div class="w-full border-2 py-2 text-3/2xl flex-col justify-center font-semibold border-white rounded-lg" id="createpost">
                        Create post
                    </div>
                </button>
            </a>
            <!--Posts -->
            <div class="flex flex-col h-full w-full">
                <div class="py-2">
                    <ul class="flex flex-col w-full space-y-2 max-h-100 list-none overflow-x-scroll">
                        {#each data as item}
                        <div class="p-2 bg-slate-500 rounded-md">
                            <li class="flex text-md">
                                {item.title}
                            </li>
                            <li>

                            </li>
                            <li>
                                {item.created_at}
                            </li> 
                        </div>
                        {/each}
                        <InfiniteScroll
                        hasMore={newBatch.length}
                        threshold={100}
                        on:loadMore={() => {cursorid = fetchData()}} />
                    </ul>
                </div>
            </div>
        </div>
        <div class="hidden md:flex flex-col bg-slate-800 p-4 items-center rounded-xl">
            <h1>Tags</h1>
            <div class = "flex flex-wrap space-y-4 justify-center">
                {#await fetchTags()}
                    <h1>Getting tags</h1>
                {:then tags} 
                    {#each tags as tag}
                    <div class=" border-2 border-white">
                        {tag.tag_name}
                    </div>
                {/each}
                {/await}

                
            </div>
        </div>
        
    </div>
    
</div>
