<script>
  import { onMount } from "svelte";
  import ArtCard from "/src/components/art/ArtCard.svelte";

  //Start of Infinite Scroll
  import InfiniteScroll from "./InfiniteScroll.svelte";
  let skip = 0;
  let limit = 10;
  let increment = 10;
  let nextUrl = "";
  let data = [];
  let newBatch = [];
  let isLoading = false;
  let hasMore;

  async function fetchData() {
    isLoading = true;

    const response = await fetch(
      `https://dummyjson.com/products?skip=${skip}&limit=${limit}`,
    );
    const resData = await response.json();
    newBatch = resData.products;
    hasMore = newBatch.length;
    skip = skip + increment;

    isLoading = false;
  }

  onMount(() => {
    // load first batch onMount
    fetchData();
  });

  $: data = [...data, ...newBatch];
  // End of Infinite Scroll

  //Start of MasonGrid
  import { fade } from "svelte/transition";

  export let animate = false;
  export let duration = 200;
  export let gap = 32;

  export let items;
  export let masonryHeight = 0;
  export let masonryWidth = 0;
  export let minColWidth = 330;

  $: items = data;

  $: nCols = Math.min(
    items.length,
    Math.floor(masonryWidth / (minColWidth + gap)) || 1,
  );
  $: itemsToCols = items.reduce(
    (cols, item, idx) => {
      cols[idx % cols.length].push([item, idx]);
      return cols;
    },
    Array(nCols).fill(null).map(() => []), // prettier-ignore
  );
  //End of MasonGrid
</script>

<div
  class="flex flex-col items-center overflow-y-auto overscroll-none no-scrollbar">
  <div
    class="masonry container gap-[32px]"
    bind:clientWidth={masonryWidth}
    bind:clientHeight={masonryHeight}>
    {#each itemsToCols as col}
      <div class="col gap-[32px]">
        {#each col as [item, idx] (item.id)}
          <!-- <slot {idx} {item}> -->
          <ArtCard artwork={item} />
          <!-- </slot> -->
        {/each}
      </div>
    {/each}
  </div>
  <InfiniteScroll
    {hasMore}
    threshold={300}
    on:loadMore={() => {
      fetchData();
    }} />
</div>
{#if isLoading}
  <div
    class="z-50 absolute flex justify-center items-center bottom-0 h-60 left-0 right-0 bg-gradient-to-t from-black/20">
    <span class="loading loading-spinner loading-lg text-accent"></span>
  </div>
{/if}

<style>
  :where(div.masonry) {
    height: calc(100vh - 76px);
    display: flex;
    justify-content: center;
    overflow-wrap: anywhere;
    box-sizing: border-box;
  }
  :where(div.masonry div.col) {
    display: grid;
    height: max-content;
    width: 100%;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  .no-scrollbar {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
</style>
