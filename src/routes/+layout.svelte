<script>
  import Header from "/src/components/head/Header.svelte";
  import Footer from "/src/components/Footer.svelte";
  import { invalidate } from "$app/navigation";
  import { onMount } from "svelte";

  export let data;

  //Supabase auth logic
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

<Header />
<main>
  <slot />
</main>
<Footer />

<style type="text/scss" global>
  @import "/src/sass/main.scss";
</style>
