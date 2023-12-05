<script>
  import { invalidate } from "$app/navigation";
  import { onMount } from "svelte";
  import "/src/app.css";
  import ThemeToggle from "../../../components/footer/ThemeToggle.svelte";

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

<main class="dark:bg-primary">
  <div class="absolute z-10 right-4 top-4">
    <ThemeToggle />
  </div>
  <slot />
</main>
