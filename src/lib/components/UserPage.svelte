<script lang="ts">
    import { DateTime } from "luxon";
    import { page } from "$app/stores";

    export let id: string;
    export let username: string;
    export let email: string;
    export let createdAt: string;
    export let followerCount: number;
    export let followingCount: number;
    export let postsCount: number;
    export let currentUserIsFollowing: boolean;
    
    let parsedCreatedAt = DateTime.fromISO(createdAt);
</script>

<div class="p-2">
    <div class="flex-col items-center rounded-xl bg-slate-700 p-2">
        <div class="flex justify-center space-x-4">
            <h1 class="flex justify-center text-2xl md:text-4xl font-mono font-semibold text-slate-50">{username}</h1>
            {#if $page.data.user && id != $page.data.user.user.id}
            <!--User is logged in and is not viewing their own page-->
                <div class="flex justify-center">
                    {#if currentUserIsFollowing}
                        <button
                        class="bg-slate-800 hover:bg-orange-200 hover:bg-opacity-75 transition duration-200 border-4 border-primary rounded-xl p-1 text-white hover:text-primary  flex items-center"
                        ><a href="/unfollow" class=" font-mono  font-semibold ">Unfollow</a></button>
                    {:else}
                        <button
                        class="bg-slate-800 hover:bg-orange-200 hover:bg-opacity-75 transition duration-200 border-4 border-primary rounded-xl p-1 text-white hover:text-primary  flex items-center"
                        ><a href="/follow" class=" font-mono  font-semibold ">Follow</a></button
                    >
                    {/if}
                </div>
            {/if}
        </div>
        <p class="flex justify-center font-mono text-start text-slate-50">Email: {email}</p>
        <p class="flex justify-center font-mono text-start text-slate-50">Joined: {parsedCreatedAt.toLocaleString(DateTime.DATETIME_FULL)}</p>
        <span class="flex justify-center space-x-10">
            <div class="flex-col ">
                <div class="flex justify-center">
                        <a class=" font-mono text-slate-50 text-3xl text-center" href="/followers">
                        <button>
                            <bold class="text-bold">{followerCount}</bold>
                        </button>
                    </a>
                </div>
                <div>
                    <a class=" font-mono text-slate-50 text-center" href="/followers">
                        <button>
                            <bold class="text-bold">Followers</bold>
                        </button>
                    </a>
                </div>
            </div>
            <div class="flex-col">
                <div class="flex justify-center">
                    <a class=" font-mono text-slate-50 text-3xl items-center text-center" href="/followers">
                        <button>
                            <bold class="text-bold">{followingCount}</bold>
                        </button>
                    </a>
                </div>
                <div>
                    <a class=" font-mono text-slate-50" href="/followers">
                        <button>
                            <bold class="text-bold">Following</bold>
                        </button>
                    </a>
                </div>
            </div>
            <div class="flex-col ">
                <div>
                    <p class=" font-mono text-slate-50 text-3xl text-center" >
                            <bold class="text-bold">{postsCount}</bold>
                    </p>
                </div>
                <div class="flex justify-center items-center py-0.5">
                    <p class="font-mono text-slate-50">
                            <bold class="text-bold">Posts</bold>
                    </p>
                </div>
            </div>
        </span> 
    </div>
</div>