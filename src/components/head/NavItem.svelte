<script>
  import { ChevronDownOutline } from "flowbite-svelte-icons";

  export let show = false;
  export let navItem;
  let container;

  function onWindowClick(e) {
    if (container.contains(e.target) == false) show = false;
  }
</script>

<svelte:window on:click={onWindowClick} />

{#if navItem.subLinks}
  <div class="static -mx-3 lg:mx-0 lg:relative" bind:this={container}>
    <button
      type="button"
      class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-light leading-7 text-inherit lg:gap-x-1 lg:text-sm lg:leading-6 lg:p-0 dark:hover:bg-gray-700 dark:lg:hover:bg-transparent"
      aria-expanded="false"
      on:click={() => (show = !show)}
    >
      {navItem.name}
      <ChevronDownOutline
        class="w-2 h-2 ml-2 text-primary-800 dark:text-white inline"
      />
    </button>

    {#if show}
      <div
        class="mt-2 lg:absolute lg:p-3 lg:-left-4 lg:top-full lg:z-10 lg:mt-3 lg:w-screen lg:max-w-[200px] lg:overflow-hidden lg:rounded-3xl lg:bg-base-100 dark:bg-inherit lg:shadow-lg lg:ring-1 lg:ring-gray-900/5 dark:lg:ring-gray-100/5 dark:shadow-gray-100/5"
      >
        {#each navItem.subLinks as subLink}
          <a
            href={subLink.link}
            class=" block rounded-lg py-2 pl-6 pr-3 text-sm font-light leading-7 text-inheri lg:p-2 lg:leading-6 lg:hover:bg-gray-50 dark:hover:bg-gray-700"
          >
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
  -mx-3 block rounded-lg px-3 py-2 text-base font-light leading-7 text-inheri
  lg:text-sm lg:leading-6 lg:p-0
  ">{navItem.name}</a
  >
{/if}
