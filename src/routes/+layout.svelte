<script>
  import Header from "/src/components/head/Header.svelte";
  import Footer from "/src/components/Footer.svelte";
  import { invalidate } from "$app/navigation";
  import { onMount } from "svelte";

  export let data;

  let { supabase, session } = data;
  $: ({ supabase, session } = data);

  onMount(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, _session) => {
      if (_session?.expires_at !== session?.expires_at) {
        invalidate("supabase:auth");
      }
    });

    return () => subscription.unsubscribe();
  });
</script>

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <!-- Primary Meta Tags -->
    <title>Svelte impressd project</title>
    <meta name="title" content="Svelte impressd project" />
  </head>
  <body>
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </body>
</html>

<style type="text/scss" global>
  @import "/src/sass/main.scss";
</style>
