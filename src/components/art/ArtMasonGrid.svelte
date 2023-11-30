<script>
  import ArtCard from "./ArtCard.svelte";

  export let art;
</script>

<div class="columns-2xs gap-12">
  {#each art as artwork}
    <ArtCard {artwork} />
  {/each}
</div>
