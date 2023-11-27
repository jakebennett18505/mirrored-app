<script>
  import { page } from "$app/stores";
  const session = $page.data.session;
</script>

<section class="section">
  <div class="container">
    {#if session}
      <!-- Display when the user is logged in -->
      <h1 class="heading-1">Hello, {session.user.email}!</h1>
    {:else}
      <!-- Display when the user is logged out -->
      <h1 class="heading-1">Hello, there!</h1>
    {/if}
  </div>
</section>

<style>
</style>
