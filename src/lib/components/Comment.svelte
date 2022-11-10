<script lang="ts">
    
    import { DateTime } from "luxon";
    export let username:string;
    export let comment :string;
    export let created_at: string;
</script>
<div class="flex flex-col ">
    <div class="flex justify-between">
        <!-- Username -->
        <div class="flex font-semibold text-xl">
            {username}
        </div>
        <!-- Date -->
        <div class="flex font-semibold font-xl">
            {created_at}
        </div>
    </div>
    <!-- Comment body -->
    <div>
        {comment}
    </div>
</div>
