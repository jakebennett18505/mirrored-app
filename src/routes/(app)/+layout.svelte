<script>
  import Header from "../../components/header/Header.svelte"
  import Footer from "/src/components/footer/Footer.svelte"
  import { invalidate } from "$app/navigation"
  import { onMount } from "svelte"
  import "/src/app.css"
</script>

<Header />
<main>
  <slot />
</main>
<Footer />
