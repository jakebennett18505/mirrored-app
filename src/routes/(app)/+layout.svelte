<script>
  import Header from "../../components/header/Header.svelte";
  import Footer from "/src/components/footer/Footer.svelte";
  import { invalidate } from "$app/navigation";
  import { onMount } from "svelte";
  import "/src/app.css";

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
