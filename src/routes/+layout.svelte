<script>
  import Header from "/src/components/head/Header.svelte";
  import Footer from "/src/components/Footer.svelte";
  import { invalidate } from "$app/navigation";
  import { onMount } from "svelte";
  import "/src/app.css";
  import { page } from "$app/stores";

  let currentRoute = $page.route.id;
  console.log(currentRoute);

  export let data;

  const smallFooterRoutes = ["/auth/login", "/auth/register"];

  console.log(smallFooterRoutes.includes(currentRoute));

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
<Footer smallFooter={smallFooterRoutes.includes(currentRoute)} />
