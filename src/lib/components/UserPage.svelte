<script lang="ts">
    import { DateTime } from "luxon";
    import { page } from "$app/stores";

    export let username: string;
    export let email: string;
    export let createdAt: string;
    export let followerCount: number;
    export let followingCount: number;
    export let postsCount: number;
    export let currentUserIsFollowing: boolean;
    
    let parsedCreatedAt = DateTime.fromISO(createdAt);
</script>

<div class="flex items-center rounded-xl bg-slate-700">
    <h1 class="text-2xl md:text-4xl font-mono font-semibold text-slate-50">{username}</h1>
    <p class="font-mono text-start text-slate-50">Email: {email}</p>
    <p class="font-mono text-start text-slate-50">Joined: {parsedCreatedAt.toLocaleString(DateTime.DATETIME_FULL)}</p>
    <span class="inline-flex">
        <p class="font-mono text-slate-50 text-center"><bold class="text-bold">{followerCount}</bold> followers</p>
        <p class="font-mono text-slate-50 text-center"><bold class="text-bold">{followingCount}</bold> following</p>
        <p class="font-mono text-slate-50 text-center"><bold class="text-bold">{postsCount}</bold> posts</p>
    </span>
    {#if $page.data.user && username != $page.data.user.username}
    <!--User is logged in and is not viewing their own page-->
        <span class="inline-flex">
            {#if currentUserIsFollowing}
                <button
                class="bg-primary hover:bg-orange-200 hover:bg-opacity-75 transition duration-200 border-4 border-primary rounded-xl p-1 text-white hover:text-primary  flex items-center"
                ><a href="/unfollow" class=" font-mono  font-semibold ">Unfollow</a></button>
            {:else}
                <button
                class="bg-primary hover:bg-orange-200 hover:bg-opacity-75 transition duration-200 border-4 border-primary rounded-xl p-1 text-white hover:text-primary  flex items-center"
                ><a href="/follow" class=" font-mono  font-semibold ">Follow</a></button
            >
            {/if}
        </span>
    {/if}
</div>