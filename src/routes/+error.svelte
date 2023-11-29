<script>
  import { page } from "$app/stores";
  const { error, status } = $page;

  console.log($page);
</script>

<div class="container">
  <p>{status}</p>
  <p>{error.message}</p>
</div>
