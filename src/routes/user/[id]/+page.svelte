<script>
    import UserPage from "$lib/components/UserPage.svelte";
    import { page } from "$app/stores";

    let { username, email, created_at } = $page.data.user;
</script>

<UserPage username={username} email={email} createdAt={created_at} followerCount={1} followingCount={1} currentUserIsFollowing={false} postsCount={1} />