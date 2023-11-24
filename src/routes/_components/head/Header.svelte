<script>
	import logo from '$lib/images/logo.png';
	let isMenuActive = false;

	function toggleMenu() {
		isMenuActive = !isMenuActive;
	}
</script>

<header class="site-header">
	<nav class="container site-header__inner">
		<div>
			<a href="/">
				<img class="logo" src={logo} alt="Logo" />
			</a>
		</div>
		<button class="hamburger {isMenuActive ? 'active' : ''}" on:click={toggleMenu}></button>
		<div class="navbar-container {isMenuActive ? 'active' : ''}">
			<ul class="nav | flex-group align-center">
				<li><a href="/">Locations</a></li>
				<li><a href="/art">Gallery</a></li>
				<li><a href="/">About</a></li>
				<li><a href="/">Log in</a></li>
				<button class="button" data-type="primary">Sign up</button>
			</ul>
		</div>
	</nav>
</header>

<style>

  .logo {
    max-height: 40px;
  }

  .hamburger {
    width: 40px;
    height: 40px;
    border-radius: 4px;
    border: 1px solid var(--neutral-50);
    cursor: pointer;
  }

  .hamburger.active {
    transform: rotate(90deg);
  }

  .navbar-container {
    transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
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
