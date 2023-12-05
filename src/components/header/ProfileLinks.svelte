<script>
  import { page } from "$app/stores";
  import { signOut } from "../auth.js";

  const { session, supabase } = $page.data;
  const profileLinks = ["Profile", "Settings"];
  let container;
  let innerWidth;

  $: show = innerWidth < 1024;

  async function handleSignOut() {
    await signOut(supabase);
  }

  function toggleMenu() {
    if (innerWidth > 1024) {
      show = !show;
    }
  }

  function onWindowClick(e) {
    if (innerWidth > 1024 && show) {
      if (container.contains(e.target) == false) show = false;
    }
  }
</script>

<svelte:window bind:innerWidth on:click={onWindowClick} />

{#if !session}
  <a
    href="/auth/signup"
    class="-mx-3 block rounded-lg px-3 py-2.5 text-2xl font-light leading-7 text-inherit lg:text-sm lg:leading-6 lg:hover:bg-neutral/5 dark:hover:bg-gray-700"
    >Sign up <span class="hidden lg:inline" aria-hidden="true">&rarr;</span></a>
{:else}
  <div
    bind:this={container}
    class="flex items-center gap-4 py-2 lg:p-0 lg:dropdown">
    <button
      on:click={toggleMenu}
      tabindex="0"
      class="rounded-full w-16 h-16 lg:w-8 lg:h-8 avatar">
      <div class="rounded-full">
        <img
          alt="Tailwind CSS Navbar component"
          src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
      </div>
    </button>
    <div class="inline-block lg:hidden">
      <div class="text-xl">Jane Doe</div>
      <div>
        {session.user.email}
      </div>
    </div>
  </div>
  <!-- mt-2 lg:absolute lg:p-3 lg:-left-4 lg:top-full lg:z-10 lg:mt-3 lg:w-screen lg:max-w-[200px] lg:overflow-hidden lg:rounded-3xl lg:bg-base-100 dark:bg-inherit lg:shadow-lg lg:ring-1 lg:ring-gray-900/5 dark:lg:ring-gray-100/5 dark:shadow-gray-100/5 -->
  {#if show}
    <div
      class="mt-2 lg:absolute lg:p-3 lg:z-10 lg:mt-3 lg:top-12 lg:w-screen lg:max-w-[200px] lg:overflow-hidden lg:rounded-3xl lg:bg-base-100 dark:bg-inherit lg:shadow-lg lg:ring-1 lg:ring-gray-900/5 dark:lg:ring-gray-100/5 dark:shadow-gray-100/5">
      {#each profileLinks as link}
        <a
          href={link.toLowerCase()}
          class=" block rounded-lg py-2 pr-3 text-base font-light leading-7 text-inherit lg:px-2 lg:py-1 lg:text-sm lg:leading-6 lg:hover:bg-neutral/5">
          {link}
        </a>
      {/each}
      <button
        on:click={handleSignOut}
        class="text-left w-full block rounded-lg py-2 pr-3 text-base font-light leading-7 text-inherit lg:px-2 lg:py-1 lg:text-sm lg:leading-6 lg:hover:bg-neutral/5"
        >Logout
      </button>
    </div>
  {/if}
{/if}

<style>
</style>
