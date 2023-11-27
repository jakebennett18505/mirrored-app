<script>
  import { page } from "$app/stores";
  import ArtistSocialIcons from "../../../components/ArtistSocialIcons.svelte";

  const { data } = $page;
  const { artist } = data;

  const services = ["Commissions", "Prints", "Drawings", "Lorem"];
</script>

<section class="artist-header">
  <div class="header-image-wrapper">
  </div>
  <div class="header-profile | container">
    <div class="profile-image-wrapper">
      <img
        class="profile-image"
        src={artist.image}
        alt="Profile image of ${artist.firstName}"
      />
    </div>
    <div class="profile-info">
      <div class="artist-name">
        <div class="subtitle-2">{artist.firstName} {artist.lastName}</div>
        <ArtistSocialIcons />
      </div>
      <div>
        <p>
          {artist.firstName} is {artist.age} years old and hails from {artist
            .address.city}.
        </p>
      </div>
      <div class="services">
        {#each services as service}
          <p>{service}</p>
        {/each}
      </div>
    </div>
  </div>
</section>
<section class="section-small">
  <div class="container | flex-group justify-center">
    <ul class="tab-nav">
      <li
        aria-current={$page.url.pathname.endsWith("/home") ? "page" : undefined}
      >
        <a data-sveltekit-noscroll href="home">Home</a>
      </li>
      <li
        aria-current={$page.url.pathname.endsWith("/gallery")
          ? "page"
          : undefined}
      >
        <a data-sveltekit-noscroll href="gallery">Gallery</a>
      </li>
      <li
        aria-current={$page.url.pathname.endsWith("/bio") ? "page" : undefined}
      >
        <a data-sveltekit-noscroll href="bio">Bio</a>
      </li>
    </ul>
  </div>
</section>

<slot />

<style>
  :root {
    --wireframe-background: rgba(0, 0, 0, 0.1);
    --wireframe-primary: rgba(255, 0, 0, 0.1);
  }

  .header-image-wrapper {
    height: 300px;
    overflow: hidden; 
    background-image: url('$lib/images/artist-hero-image.jpg');
    background-size: cover;
    background-position: center;
  }

  .header-profile {
    min-height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  .services {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .services > p {
    border: 1px solid var(--neutral-10);
    padding: 6px 12px;
    border-radius: 100px;
  }

  .profile-image-wrapper {
    margin-top: -125px;
    position: relative;
    height: 250px;
    width: 250px;
  }

  .profile-image {
    border-radius: 100%;
    border: 5px solid white;
    background-color: var(--neutral-10);
  }

  .profile-info {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
  }

  .artist-name {
    display: flex;
    justify-content: space-between;
  }

  .tab-nav {
    display: flex;
    width: 100%;
    justify-content: center;
  }

  ul > li {
    max-width: 200px;
    flex: 1;
    border-bottom: 2px solid var(--neutral-40);
    list-style: none;
    text-align: center;
  }

  li > a {
    text-decoration: none;
    font-size: 24px;
    font-weight: 700;
    color: var(--neutral-40);
  }

  li[aria-current="page"] {
    border-color: var(
      --primary-100
    ); /* Change to the desired active tab color */
  }

  li[aria-current="page"] > a {
    color: var(--primary-100); /* Change to the desired active tab color */
  }

  @media (min-width: 45em) {
    .header-profile {
      flex-direction: row;
    }

    .profile-info {
      width: unset;
      flex: 1;
    }
  }
</style>
