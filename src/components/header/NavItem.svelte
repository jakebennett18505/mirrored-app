<script>
  import { ChevronDownIcon } from "svelte-feather-icons"

  export let show = false
  export let navItem
  let container

  function onWindowClick(e) {
    if (show) {
      if (container.contains(e.target) == false) show = false
    }
  }
</script>

<svelte:window on:click={onWindowClick} />

{#if navItem.subLinks}
  <div class="static lg:relative" bind:this={container}>
    <button
      type="button"
      class="w-full flex justify-between items-center rounded-lg p-3 text-2xl font-light leading-6 text-inherit lg:text-sm hover:bg-neutral/5"
      aria-expanded="false"
      on:click={() => (show = !show)}>
      {navItem.name}
      <ChevronDownIcon
        strokeWidth="1"
        class="w-6 h-6 ml-2 text-primary-800 dark:text-neutral lg:w-4 lg:h-4 inline" />
    </button>

    {#if show}
      <div
        class="mt-2 bg-base-100 p-2 lg:absolute lg:z-1 lg:w-[200px] lg:rounded-3xl lg:shadow-2xl">
        {#each navItem.subLinks as subLink}
          <a
            href={subLink.link}
            class="block rounded-lg px-3 py-2 text-base font-light leading-6 lg:text-sm hover:bg-neutral/5">
            {subLink.name}
          </a>
        {/each}
      </div>
    {/if}
  </div>
{:else}
  <a
    href={navItem.link}
    class="
     rounded-lg p-3 text-2xl font-light leading-6 text-inherit lg:text-sm hover:bg-neutral/5"
    >{navItem.name}</a>
{/if}
