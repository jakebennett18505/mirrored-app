<script>
  import { page } from "$app/stores"

  const session = $page.data.session

  export let data
  let { art } = data

  function randomNumber() {
    return Math.floor(Math.random() * 10)
  }

  let number = randomNumber()

  let artwork = art[number]
</script>

<div class="container">Hello</div>

{#each artwork.images as image}
  <img src={image} class="contain" alt="This was taken by me" />
{/each}
