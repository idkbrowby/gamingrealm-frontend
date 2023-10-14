<script lang="ts">
	import { FileDropzone } from '@skeletonlabs/skeleton';
</script>

<div class="  min-h-full flex items-center justify-center py-10">
	<div class="flex flex-col items-center card mb-10 mx-10 p-10 justify-center w-10/12">
		<form method="POST" action="makepost">
			<div class="space-y-4 py-4">
				<!-- Title of post -->
				<div class="w-full flex-col space-y-2">
					<span class="text-xl">Title</span>
					<input
						type="text"
						id="title"
						name="title"
						placeholder="Title"
						class=" w-full variant-form-material"
						required
					/>
				</div>
				<!-- description of post -->
				<div class="w-full flex-col space-y-2">
					<span class="text-xl">Description</span>
					<input
						type="text"
						id="description"
						name="description"
						placeholder="Description"
						class=" w-full variant-form-material"
						required
					/>
				</div>
				<div>
					<span class="text-xl">File</span>
					<input class="input flex md:hidden" id="file" type="file" />

					<FileDropzone name="file" class="md:flex hidden ">
						<svelte:fragment slot="lead"
							><div class="flex justify-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="w-16 h-16"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
									/>
								</svg>
							</div>
						</svelte:fragment>
						<svelte:fragment slot="message"
							><strong>Upload a file </strong> or drag and drop</svelte:fragment
						>
						<svelte:fragment slot="meta">png,img or video allowed</svelte:fragment>
					</FileDropzone>
				</div>
				<div class="flex justify-center items-center pt-4">
					<button class="btn variant-form-material" type="button">Submit</button>
				</div>
			</div>
		</form>
	</div>
</div>
