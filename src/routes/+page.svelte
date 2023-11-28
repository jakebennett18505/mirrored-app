<script>
  import { page } from "$app/stores";
  const session = $page.data.session;
</script>

<section class="section">
  <div class="container">
    <h1 class="heading-1">Hello, there!</h1>
    {#if session}
      <p>You are signed in with the email {session.user.email}</p>
    {/if}
  </div>
</section>

<style>
</style>
