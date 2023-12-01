<!-- // src/routes/auth/+page.svelte -->
<script>
  import { Section, Register } from "flowbite-svelte-blocks";
  import { Button, Checkbox, Label, Input } from "flowbite-svelte";

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

<Section name="login">
  <Register>
    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
      <form class="flex flex-col space-y-6" action="/">
        <h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">
          Log in
        </h3>
        <Label class="space-y-2">
          <span>Email</span>
          <Input
            required
            placeholder="example@email.com"
            type="email"
            name="email"
            id="email"
            bind:value={email}
          />
        </Label>
        <Label class="space-y-2">
          <span>Password</span>
          <Input
            required
            type="password"
            name="password"
            id="password"
            bind:value={password}
            placeholder="•••••••••"
          />
        </Label>
        <div class="flex items-start">
          <Checkbox>Remember me</Checkbox>
          <a
            href="/"
            class="ml-auto text-sm text-primary-600 hover:underline dark:text-primary-500"
            >Forgot password?</a
          >
        </div>
        <Button class="button" data-type="primary" on:click={handleSignIn}
          >Log in</Button
        >
        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
          Don’t have an account yet? <a
            href="/auth/register"
            class="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >Register</a
          >
        </p>
      </form>
    </div>
  </Register>
</Section>
