<script>
  import { page } from "$app/stores";
  const { error } = $page;


  console.log($page);
</script>

<div class="container">
  <p>{error.message}</p>
</div>
