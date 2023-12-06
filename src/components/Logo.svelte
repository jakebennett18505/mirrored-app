<script lang="ts">
  export let size: "small" | "medium" | "large" = "medium";

  const textSizes = {
    small: "text-xl",
    medium: "text-3xl",
    large: "text-6xl",
  };
</script>

<a href="/">
  <p class="logo {textSizes[size]} text-primary dark:text-neutral">impressd.</p>
</a>

<style>
  .logo {
    font-family: "Optima", sans-serif;
    letter-spacing: 1.75px;
    /* font-size: 1.75rem; */
  }
</style>
