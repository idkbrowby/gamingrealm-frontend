<script lang="ts">
	let input;
	let container;
	let image;
	let placeholder;
	let showImage = false;

	function onChange() {
		const file = input.files[0];
		
    if (file) {
			showImage = true;

      const reader = new FileReader();
      reader.addEventListener("load", function () {
        image.setAttribute("src", reader.result);
      });
      reader.readAsDataURL(file);
			
			return;
    } 
		showImage = false; 
  	}
	import Tags from "svelte-tags-input";

	function handleTags(event) {
		tag = event.detail.tags;
	}

	const tagsList = ["test","testso","testsdkjfhskdjfhskdf","testsdfkjhsdfkjshfd","testssldfsldf","testsldifsldif","asddasdasda","Asdadasdasdad","kundihogya"];
</script>

<div class="min-h-screen bg-slate-500 flex py-12 justify-center">
	<div class="flex items-center justify-center">
		<div class="bg-slate-800 h-full p-10 w-full rounded-xl flex-col justify-center">
			<h1
				class="py-10 basis-1/6 text-5xl font-mono font-extrabold text-start text-pink-400 "
			>
				Create Post
			</h1>
			<form method="post" enctype="multipart/form-data">
				<label for="Title" class="block mb-2 text-sm font-medium font-mono text-gray-300"
						>Title</label
				>
				<input
					type="text"
					id="title"
					name="title"
					class="bg-gray-50 border font-mono text-gray-100 text-sm rounded-lg focus:ring-pink-300 focus:border-pink-500 block w-full p-2.5 dark:bg-gray-700 border-gray-600"
					placeholder="Praveen's Nudes"
					required
				/>
				
				<label for="Title" class="block mt-2 mb-2 text-sm font-medium font-mono  text-gray-300"
						>Caption</label
				>
				<textarea name="text" rows="6" cols="10" placeholder="Write caption here" wrap="soft" maxlength="500" required class="bg-gray-50 border font-mono text-gray-100 text-sm rounded-lg focus:ring-pink-300 focus:border-pink-500 block w-full p-2.5 dark:bg-gray-700 border-gray-600"></textarea>
				<div class="py-4 bg-slate-800 font-mono font-semibold">
					<div class="flex-wrap bg-slate-800">
						<Tags class="flex-wrap"
							on:tags={handleTags}
							addKeys={[9]} 
							maxTags={10}
							allowPaste={true}
							allowDrop={true}
							splitWith={"/"}
							onlyUnique={true}
							removeKeys={[27]} 
							placeholder={"Gamer Tags"}
							autoComplete={tagsList}
							name={"tags"}
							id={"tags"}
							allowBlur={true}
							disable={false}
							minChars={3}
							onlyAutocomplete
							labelText="Tags"
							labelShow
							required
						/>
					</div>	
				</div>
                <div class="font-mono text-white py-20 flex-col space-y-4"><input
					bind:this={input}
					on:change={onChange}
				  type="file"
				/>
                  <div class=" border-white items-center bg-slate-400 flex rounded-xl justify-center" bind:this={container}>
					{#if showImage}
						<img bind:this={image} src="" alt="Preview" />
					{:else}
						<span bind:this={placeholder} class="text-white">Image Preview</span>
					{/if}
				</div>
                </div>
				
                <div class="py-4">
					<button
					type="submit"
					disabled={placeholder}
					class="text-white bg-pink-400 hover:bg-pink-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center disabled:bg-slate-500"
					>Submit</button
				>
                </div>
				
              </form>
              
		</div>
	</div>
</div>
