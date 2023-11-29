<!-- This is a playground to play with different ideas -->

<script>
  import { page } from "$app/stores";

  //Session handling
  const supabase = $page.data.supabase;
  const session = $page.data.session;
</script>

<section class="section">
  <div class="container"></div>
</section>
<section class="section">
  <div class="container"></div>
</section>
<style>
  .container {
    border-radius: 10px;
    padding: 20px;
    background-color: var(--neutral-10);
  }
</style>
