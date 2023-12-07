<script>
  import { page } from "$app/stores";
  const { error, status } = $page;

  console.log($page);
</script>

<main class="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
  <div class="text-center">
    <p class="text-2xl font-semibold">{status}</p>
    <h1 class="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
      {error.message}
    </h1>
    <p class="mt-6 text-base leading-7">
      Sorry, we couldn’t find the page you’re looking for.
    </p>
    <div class="mt-10 flex items-center justify-center gap-x-6">
      <a href="/" class="btn btn-primary">Go back home</a>
    </div>
  </div>
</main>
