<script>
	import Layout from "./+layout.svelte";
    let lprimary='#7D6167';
    let lsecondary='#FFCFD2';
    let laccents='#F7FFDD';
    let lhighlights='#D0E3CC';
    let dprimary='#011627';
    let dsecondary='#b0b7bf';
    let daccents='#222e50';
    let dhighlights='#7c0b2b';
    
</script>
<title>Landing page</title>
<nav class="bg-dprimary border-b-2 border-dprimary h-15" >
    <div class="flex p-2 inline-flex">
        <div class="leftside border-2 border-dprimary">
            <div>
                <button class="buttons">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="{dhighlights}" class="w-6 h-6" >
                    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                  </svg>
                </button>
            </div>
            <div >
                <button class="buttons">
                <h1 class="buttontext">IDKBROWBY</h1></button>
            </div>
        </div>
    </div>
    <div class="middle justify-between align-center">
        <input class="w-threefourths px-2 py-2" id="Searchbar" name="Searchbar">
        <div>
            <button class="buttons">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-6 h-6">
                <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clip-rule="evenodd" />
              </svg>
            </button>
        </div>
    </div>
    <div class=" inline-flex ">
        <div class="rightside align-center">
            <div>
                <button class="buttons buttontext">test</button>
            </div>
            <div>
                <button class="buttons">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={laccents} class="w-6 h-6">
                        <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clip-rule="evenodd" />
                      </svg>
                      
                </button>
            </div>
        </div>
    </div>

    
</nav>
