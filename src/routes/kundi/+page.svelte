<script>
import Tags from "svelte-tags-input";

// If on:tags is defined
let tag = "";

function handleTags(event) {
    tag = event.detail.tags;
}

const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "India"
];
</script>
<Tags
    on:tags={handleTags}
    addKeys={[9]} 
    maxTags={3}
    allowPaste={true}
    allowDrop={true}
    splitWith={"/"}
    onlyUnique={true}
    removeKeys={[27]} 
    placeholder={"Svelte Tags Input full example"}
    autoComplete={countryList}
    name={"custom-name"}
    id={"custom-id"}
    allowBlur={true}
    disable={false}
    minChars={3}
    onlyAutocomplete
    labelText="Label"
    labelShow
/>
