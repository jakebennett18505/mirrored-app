<script>
  export let artwork;

  let isImageLoading = true;
</script>

<a href="/art/{artwork.id}">
  <div class="rounded-md inline-block w-full my-6">
    {#if isImageLoading}
      <div class="image-placeholder">Loading image...</div>
    {/if}
    <img
      class="rounded-md shadow-xl mb-4 {isImageLoading ? 'hidden' : ''}"
      src={artwork.images[0]}
      alt="Something to see"
      on:load={() => (isImageLoading = false)}
      on:error={() => (isImageLoading = false)}
    />
    <p class="text-2xl font-light truncate dark:text-white">{artwork.title}</p>
    <p class="text-xl font-light dark:text-white">€{artwork.price}</p>
    <p class="text-base font-light dark:text-white">
      {artwork.brand} - {artwork.category}
    </p>
  </div>
</a>

<!-- <script>
  export let artwork;
</script>

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
</style> -->

<!-- </a> -->

<style>
  .image-placeholder {
    background-color: lightgray; /* Example color */
    height: 200px; /* Adjust as needed */
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.375rem; /* 6px */
  }

  /* Optional: Hide the image initially */
  img.hidden {
    display: none;
  }
</style>
