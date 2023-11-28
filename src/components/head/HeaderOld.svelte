<script>
  import { page } from "$app/stores";
  import { MenuIcon, XIcon } from "svelte-feather-icons";
  import logo from "$lib/images/logo.png";

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

  let isMenuActive = false;

  function toggleMenu() {
    isMenuActive = !isMenuActive;
  }

  function closeMenu() {
    isMenuActive = false;
  }
</script>

<header class="site-header">
  <nav class="container site-header__inner">
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
    <div class="navbar-container {isMenuActive ? 'active' : ''}">
      <ul class="nav | flex-group align-center">
        <li><a href="/" on:click={closeMenu}>Locations</a></li>
        <li><a href="/art" on:click={closeMenu}>Gallery</a></li>
        <li><a href="/" on:click={closeMenu}>About</a></li>
        {#if !session}
          <li><a href="/auth/login" on:click={closeMenu}>Log in</a></li>
          <button class="button" data-type="primary">Sign up</button>
        {:else}
          <button class="button" data-type="primary" on:click={handleSignOut}
            >Sign out</button
          >
        {/if}
      </ul>
    </div>
  </nav>
</header>

<style>
  .logo {
    max-height: 40px;
  }

  .hamburger {
    border: unset;
    background-color: transparent;
    width: 40px;
    height: 40px;
    cursor: pointer;
    color: var(--primary-100);
    padding: 4px;
  }

  .navbar-container {
    transition:
      max-height 0.3s ease-in-out,
      opacity 0.3s ease-in-out;
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    width: 100%;
  }

  .navbar-container.active {
    max-height: 200px;
    opacity: 1;
  }

  .nav {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 45em) {
    .hamburger {
      display: none;
    }

    .navbar-container {
      display: flex;
      max-height: none;
      opacity: 1;
      transition: none;
      width: unset;
    }

    .nav {
      flex-direction: row;
      align-items: center;
    }
  }
</style>
