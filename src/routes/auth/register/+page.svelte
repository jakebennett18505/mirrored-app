<script>
  import { Section, Register } from "flowbite-svelte-blocks";
  import { Button, Checkbox, Label, Input } from "flowbite-svelte";
  import Logo from "/src/components/Logo.svelte";

  export let data;
  let { supabase } = data;
  $: ({ supabase } = data);

  let firstName;
  let lastName;
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

<Section name="login">
  <Register>
    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
      <form class="flex flex-col space-y-6" action="/">
        <h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">
          Register
        </h3>
        <Label class="space-y-2">
          <span>First name</span>
          <Input
            required
            placeholder="Jane"
            type="text"
            name="first-name"
            id="first-name"
            bind:value={firstName}
          />
        </Label>
        <Label class="space-y-2">
          <span>Last name</span>
          <Input
            required
            placeholder="Doe"
            type="text"
            name="last-name"
            id="last-name"
            bind:value={lastName}
          />
        </Label>
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
        </div>
        <Button class="button" data-type="primary" on:click={handleSignUp}
          >Register</Button
        >
        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
          Already have an account? <a
            href="/auth/login"
            class="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >Log in</a
          >
        </p>
      </form>
    </div>
  </Register>
</Section>
