<script lang="ts">
    
    import {onMount} from "svelte";
	import InfiniteScroll from "./Infinitescroll.svelte";
	
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
<body class="h-full">
<div class="h-full items-center py-4 px-4 w-full flex justify-between text-white font-mono ">
    <div class=" flex w-full justify-between space-x-4  ">
        
        <div class="w-full flex-col justify-center rounded-xl space-y-2 bg-slate-800 p-4">
            <button class="w-full">
                <div class="w-full border-2 py-2 flex-col justify-center border-white rounded-lg" id="createpost">
                    Create post
                </div>
            </button>
            <div class="w-full p-2 border-r-2 border-t-2 border-l-2 rounded-xl border-white">
                <ul class="max-h-60 overflow-auto space-y-1 text-white font-mono">   
                        {#each data as post}
                            <li> 
                                <div class=" p-1 items-center border-2 rounded-md border-white space-y-1">
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
        <div class="hidden md:flex space-x-16 bg-slate-800 p-4 rounded-xl">
            test
        </div>
        
    </div>
    
</div>
</body>