<script lang="ts">
    import {DateTime} from "luxon";

    interface PostCardItem {
        id: string;
        title: string;
        text_content: string;
        created_at: string;
    }

    export let item: PostCardItem;
</script>

<a href="/post/{item.id}">
    <button class="w-full flex flex-col ">
    <div class="p-2 bg-slate-500 rounded-md ">
        <li class="flex text-md font-bold text-2xl">
            {item.title}
        </li>
        <li class="flex flex-wrap py-2 break-words">
            {item.text_content.slice(0,75)}...
        </li>
        <li class="flex">
        Post created at : {DateTime.fromISO(item.created_at).toLocaleString(DateTime.DATETIME_MED)}
        </li> 
    </div>
</button>
</a>