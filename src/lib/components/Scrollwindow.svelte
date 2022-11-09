<script lang="ts">
    
    import {onMount} from "svelte";
	import InfiniteScroll from "./infinitescroll.svelte";
	
	// if the api (like in this example) just have a simple numeric pagination
    let page = 0;
	// but most likely, you'll have to store a token to fetch the next page
	let nextUrl = '';
	// store all the data here.
	let data = [];
	// store the new batch of data here.
	let newBatch = [];
	
	async function fetchData() {
		const response = await fetch(`https://api.openbrewerydb.org/breweries?by_city=los_angeles&page=${page}`);
		newBatch = await response.json();
		console.log(newBatch)
	};
	
	onMount(()=> {
		// load first batch onMount
		fetchData();
	})

  $: data = [
		...data,
    ...newBatch
  ];
</script>

<div class="h-full items-center py-10 px-4 w-full flex justify-between text-white font-mono">
    <div class=" flex w-full justify-between px-2 space-x-4">
        
        <div class="w-full border-2  flex-col justify-center border-white rounded-xl space-y-2 p-2">
            <div class="w-full border-2 flex-col justify-center border-white rounded-xl" id="createpost">
                Create post
            </div>
            <div class="w-full p-2 border-2 border-white">
                <ul class="max-h-60 overflow-hidden overflow-y-auto space-y-1 text-white font-mono">   
                        {#each data as post}
                            <li> 
                                <div class=" p-1 items-center border-2 border-white space-y-1">
                                    {post.name}
                                </div> 
                            </li>
                        {/each}
                        <InfiniteScroll
                            hasMore={newBatch.length}
                            threshold={100}
                            on:loadMore={() => {page++; fetchData()}} />
                </ul>
            </div>
        </div>
        <div class="hidden md:flex p-2 border-2 border-white rounded-xl">
            test
        </div>
        
    </div>
    
</div>