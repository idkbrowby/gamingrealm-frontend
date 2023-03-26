<script lang="ts">
    import { DateTime } from "luxon";

    export let userId: string;
    export let username: string;
    export let comment:string;
    export let createdAt: string;
</script>

<div class="flex flex-col ">
    <div class="flex justify-between">
        <!-- Username -->
        <a href={`/user/${userId}`}>
            <div class="flex font-semibold text-xl">
                {username}
            </div>
        </a>
        <!-- Date -->
        <div class="flex font-semibold font-xl">
            {DateTime.fromISO(createdAt).toLocaleString(DateTime.DATETIME_SHORT)}
        </div>
    </div>
    <!-- Comment body -->
    <div>
        {comment}
    </div>
</div>
