<script>
  /** @type {import('./$types').PageData} */
  export let data;
  const { artist, session } = data;

  console.log(artist);
  
  const user = session.user;
  console.log(user);
</script>

<div class="container">
  <h1 class="heading-1">Hello, {artist.firstName}</h1>
  <p>{user.email}</p>
</div>
