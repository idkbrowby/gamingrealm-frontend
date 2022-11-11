<script>
    import UserPage from "$lib/components/UserPage.svelte";
    import UserPostsScrollWindow from "$lib/components/UserPostsScrollWindow.svelte";

    export let data;
    let id = data.id;
    let username = data.username;
    let email = data.email;
    let created_at = data.created_at;
    let followerCount = data.follower_count;
    let followingCount = data.following_count;
    let postsCount = data.posts_count;
    let isFollowing = data.is_following;
</script>

<UserPage id={id} username={username} email={email} createdAt={created_at} followerCount={followerCount} followingCount={followingCount} currentUserIsFollowing={isFollowing} postsCount={postsCount} />
<UserPostsScrollWindow userId={id} />