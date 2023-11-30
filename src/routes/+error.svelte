<script>
  import { Section, Page404 } from "flowbite-svelte-blocks";
  import { Button } from "flowbite-svelte";
  import { page } from "$app/stores";
  const { error, status } = $page;

  console.log($page);
</script>

<Section name="page404">
  <Page404>
    <svelte:fragment slot="h1">{status}</svelte:fragment>
    <svelte:fragment slot="paragraph">
      <p
        class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white"
      >
        Something went wrong.
      </p>
      <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
        {error.message}
      </p>
      <Button href="/" size="lg">Back to Homepage</Button>
    </svelte:fragment>
  </Page404>
</Section>
