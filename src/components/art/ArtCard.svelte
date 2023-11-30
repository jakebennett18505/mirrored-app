<script>
  export let artwork;
</script>

<a href="/art/{artwork.id}">
  <div class="rounded-md inline-block w-full my-6">
    <img
      class="rounded-md shadow-2xl mb-4"
      src={artwork.images[0]}
      alt="Something to see"
    />
    <p class="text-2xl font-light truncate dark:text-white">{artwork.title}</p>
    <p class="text-xl font-light dark:text-white">€{artwork.price}</p>
    <p class="text-base font-light dark:text-white">
      {artwork.brand} - {artwork.category}
    </p>
  </div>
</a>

<style>
</style>
