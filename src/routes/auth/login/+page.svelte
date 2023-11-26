<!-- // src/routes/auth/+page.svelte -->
<script>
  export let data;
  let { supabase } = data;
  $: ({ supabase } = data);

  let email;
  let password;

  const handleSignIn = async () => {
    // Check if both email and password fields are filled in
    if (email && password) {
      try {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) {
          // Handle the error (e.g., wrong credentials) without refreshing the page
          console.error("Sign-in error:", error.message);
        } else {
          // Sign-in was successful
          console.log("Sign-in successful");

          // Redirect to the homepage after successful sign-in
          window.location.href = "/"; // You can change the URL as needed
        }
      } catch (error) {
        // Handle other errors (e.g., network issues)
        console.error("Error:", error.message);
      }
    } else {
      // Handle the case where one or both fields are not filled in
      console.error("Please fill in both email and password fields.");
    }
  };
</script>

<div class="contact-form">
  <form class="form-group">
    <label for="email">Email</label>
    <input
      required
      placeholder="example@email.com"
      type="email"
      name="email"
      id="email"
      bind:value={email}
    />
    <label for="password">Password</label>
    <input
      required
      placeholder="*********"
      type="password"
      name="password"
      id="password"
      bind:value={password}
    />
    <button class="button" data-type="primary" on:click={handleSignIn}
      >Sign in</button
    >
  </form>
</div>

<style>
  .contact-form {
    max-width: 300px;
    margin: 0 auto;
  }

  .button {
    margin-top: 20px;
  }
</style>
