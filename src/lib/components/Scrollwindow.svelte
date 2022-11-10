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
	
    let tags=["asd","Asdasd","asdasdasd","asdasdasdqwerlia","iuoqweoiasdflhasdfj","aksujjhaksjdhaksjdh"];

	async function fetchData() {
		const response = await fetch(`https://api.openbrewerydb.org/breweries?page=${page}`);
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
<div class=" py-4 px-4 w-full flex justify-between text-white font-mono ">
    <div class=" flex w-full justify-between space-x-4  ">
        
        <div class="w-full flex-col justify-center rounded-xl space-y-2 bg-slate-800 p-4">
            <a href="/createpost">
                <button class="w-full">
                    <div class="w-full border-2 py-2 flex-col justify-center border-white rounded-lg" id="createpost">
                        Create post
                    </div>
                </button>
            </a>
            <!--Posts -->
            <div class="w-full p-2 overflow-y-auto border-r-2 border-t-2 border-l-2 rounded-xl border-white">
                <ul class=" overflow-y-auto space-y-1 text-white font-mono ">   
                        {#each data as post}
                            <li> 
                                <div class=" p-1 items-center border-2 rounded-md border-white space-y-1">
                                    {post.name}
                                </div> 
                                <div class=" p-1 items-center border-2 rounded-md border-white space-y-1">
                                    {post.state}
                                </div> 
                                <div class=" p-1 items-center border-2 rounded-md border-white space-y-1">
                                    {post.longitude}
                                </div> 
                            </li>
                        {/each}
                        <InfiniteScroll
                            hasMore={newBatch.length}
                            threshold={1000}
                            on:loadMore={() => {page++; fetchData()}} />
                            {page}
                </ul>
            </div>
        </div>
        <div class="hidden md:flex flex-col space-x-16 bg-slate-800 p-4 items-center rounded-xl">
            <h1>Tags</h1>
            <div class = "flex flex-wrap space-y-4 justify-center">
                {#each tags as tag}
                    <div class=" border-2 border-white">
                        {tag}
                    </div>
                {/each}
            </div>
        </div>
        
    </div>
    
</div>
