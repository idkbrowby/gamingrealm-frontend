<script>
    let primary='#2F4454';
    let secondary ='#2E151B';
    let tertiary='#1C3334';
    let accents='#DA7B93';
    let highlights='#376E6F';
</script>
<body class="bg-primary"></body>
<nav class="w-full mx-auto bg-highlights pl-3 pr-3 py-0.5 rounded-b-lg">
    <div class=" flex justify-between items-center h-10 px-2">
        <div class=" flex space-x-4 items-center ">
            <a href="#" class="flex font-mono font-bold text-white hover:text-primary items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" class="w-10 h-10 hover:fill-accents">
                    <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
                  </svg><h1 class="px-2">Gaming Realm</h1>                  
            </a>
       </div>
        <div class="flex justify-between border border-white items-center h-8 rounded-xl hover:bg-primary space-x-2 pr-2 ">
            <span><input id="searchbar" class="bg-slate-550 mx-auto h-8 rounded-xl"></span>
            <button class="items-center ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" class="w-6 h-6">
                    <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" />
                </svg>                  
            </button>
        </div>
        <div class="flex justify-between space-x-5 text-white font">
            <button class="border-2 border-primary rounded-xl p-1"><a href="#" class=" font-mono font-bold text-white hover:text-primary">Login</a></button>
            <button class="border-2 border-primary rounded-xl p-1"><a href="#" class=" font-mono  font-bold text-white hover:text-primary">Signup</a></button>
        </div>
    </div>
</nav>