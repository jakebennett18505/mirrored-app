<script>
  export let data;
  let { supabase } = data;
  $: ({ supabase } = data);

  let email;
  let password;

  async function handleSignUp() {
    try {
      await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${location.origin}/auth/callback`,
        },
      });

      // After successful sign-up, trigger a page refresh
      window.location.reload();
    } catch (error) {
      // Handle sign-up errors if needed
      console.error("Sign-up error:", error.message);
    }
  }
</script>

<section class="section">
  <div class="container">
    <div class="contact-form">
      <form action="" class="form-group" on:submit={handleSignUp}>
        <label for="first-name">First name</label>
        <input placeholder="John" type="name" name="first-name" id="first" />
        <label for="last-name">Last name</label>
        <input placeholder="Doe" type="name" name="last-name" id="last" />
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
          placeholder="*********"
          type="password"
          name="password"
          id="password"
          bind:value={password}
        />
        <p class="switch">Already a user? <a href="/login">Log in</a></p>
        <button class="button" value="submit" data-type="primary">Submit</button
        >
      </form>
    </div>
  </div>
</section>

<style>
  .contact-form {
    max-width: 300px;
    margin: 0 auto;
  }

  .switch {
    margin-top: 8px;
  }
</style>
