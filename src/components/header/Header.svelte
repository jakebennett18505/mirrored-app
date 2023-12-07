<script>
  import Logo from "../Logo.svelte"
  import NavItems from "./NavItems.svelte"
  import { MenuIcon, XIcon } from "svelte-feather-icons"
  import { beforeNavigate } from "$app/navigation"
  import { page } from "$app/stores"
  import ProfileLinks from "./ProfileLinks.svelte"

  const { session } = $page

  beforeNavigate(() => (mobileMenuShow = false))

  let mobileMenu
  let mobileMenuShow = false

  function toggleMobileMenu() {
    mobileMenuShow = !mobileMenuShow
  }
</script>

<header class="container">
  <nav
    class="mx-auto flex max-w-7xl items-center justify-between py-4"
    aria-label="Global">
    <div class="flex lg:flex-1">
      <Logo />
    </div>
    <div class="flex lg:hidden">
      <button
        on:click={toggleMobileMenu}
        type="button"
        class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5">
        <span class="sr-only">Open main menu</span>
        <MenuIcon strokeWidth="1" />
      </button>
    </div>
    <div class="hidden lg:flex lg:gap-4">
      <NavItems />
    </div>
    <div class="hidden static lg:flex lg:flex-1 lg:justify-end">
      {#if !session}
        <ProfileLinks />
      {/if}
    </div>
  </nav>
  <!-- Mobile menu, show/hide based on menu open state. -->
  {#if mobileMenuShow}
    <div
      bind:this={mobileMenu}
      class="lg:hidden"
      role="dialog"
      aria-modal="true">
      <!-- Background backdrop, show/hide based on slide-over state. -->
      <div class="fixed inset-0 z-10"></div>
      <div
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-base-100 p-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:ring-gray-50/10">
        <div class="flex items-center justify-between gap-4">
          <Logo />
          <button
            on:click={toggleMobileMenu}
            type="button"
            class="-m-2.5 rounded-md p-2.5">
            <span class="sr-only">Close menu</span>
            <XIcon strokeWidth="1" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y-2 divide-gray-500/10">
            <div class="flex flex-col py-6 gap-4">
              <NavItems />
            </div>
            <div class="py-6 lg:flex lg:flex-1 lg:justify-end">
              <ProfileLinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  {/if}
</header>
