<script>
  //Imports
  import { page } from "$app/stores";
  import { XIcon, MenuIcon } from "svelte-feather-icons";
  import logo from "$lib/images/logo.png";

  //Session handling
  const supabase = $page.data.supabase;
  const session = $page.data.session;

  async function handleSignOut() {
    try {
      // Call the signOut method to sign the user out
      const { error } = await supabase.auth.signOut();

      if (error) {
        // Handle any errors that may occur during sign-out
        console.error("Sign-out error:", error.message);
      } else {
        // Redirect to the homepage or any desired page after successful sign-out
        toggleMenu();
        window.location.href = "/"; // You can change the URL as needed
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  }

  // Hamburger menu functionality
  let isMenuActive = false;

  function toggleMenu() {
    isMenuActive = !isMenuActive;
  }

  function closeMenu() {
    isMenuActive = false;
  }
</script>

<header class="site-header">
  <div class="header container">
    <div class="column-1">
      <div>
        <a href="/">
          <img class="logo" src={logo} alt="Logo" />
        </a>
      </div>
      <button
        class="hamburger {isMenuActive ? 'active' : ''}"
        on:click={toggleMenu}
      >
        {#if isMenuActive}
          <XIcon size="32" strokeWidth="1" />
        {:else}
          <MenuIcon size="32" strokeWidth="1" />
        {/if}
      </button>
    </div>
    <nav class="nav-menu {isMenuActive ? 'active' : ''}">
      <ul class="menu-items nav {isMenuActive ? 'active' : ''}">
        <li><a href="/" on:click={closeMenu}>Locations</a></li>
        <li><a href="/art" on:click={closeMenu}>Gallery</a></li>
        <li><a href="/" on:click={closeMenu}>About</a></li>
        {#if !session}
          <li><a href="/auth/login" on:click={closeMenu}>Log in</a></li>
          <li>
            <a
              data-type="primary"
              class="button"
              href="/auth/register"
              on:click={closeMenu}>Sign in</a
            >
          </li>
        {:else}
          <button class="button" data-type="primary" on:click={handleSignOut}
            >Sign out</button
          >
        {/if}
      </ul>
    </nav>
  </div>
</header>

<style lang="scss">
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 45em) {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  .logo {
    height: 40px;
    width: 150px;
  }

  .hamburger {
    border: unset;
    background-color: transparent;
    width: 40px;
    height: 40px;
    cursor: pointer;
    color: var(--primary-100);
    padding: 4px;

    @media (min-width: 45em) {
      display: none;
    }
  }

  .column-1 {
    display: flex;
    width: 100%;
    height: 40px;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 45em) {
      max-width: 200px;
    }
  }

  .nav-menu {
    position: absolute;
    left: 0;
    right: 0;
    top: 64px;
    height: 0px;
    background-color: var(--neutral-00);
    
    &.active {
      transition: height 0.3s ease-in-out;
      height: calc(100% - 64px);
    }

    @media (min-width: 45em) {
      display: flex;
      align-items: center;
      height: 40px;
      width: 100%;
      position: static;
      transition: none;
      justify-content: flex-end;
    }
  }

  .menu-items {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    opacity: 0;
    max-height: 100%;
    
    &.active {
      transition-delay: 0.1s;
      transition: opacity 0.3s ease-in-out;
      opacity: 1;
    }

    @media (min-width: 45em) {
      opacity: 1;
      flex-direction: row;
      transition: none;
    }
  }
</style>
