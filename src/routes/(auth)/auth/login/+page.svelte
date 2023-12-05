<script>
  import Auth from "../../../../components/AuthForm.svelte";
  import Logo from "../../../../components/Logo.svelte";
</script>

<section
  class="relative p-4 grow flex flex-col items-center gap-4 sm:grow-0 sm:py-10">
  <Logo size="large" />
  <Auth login="true" />
</section>
