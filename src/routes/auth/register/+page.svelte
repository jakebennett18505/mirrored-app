<script>
  import { Section, Register } from "flowbite-svelte-blocks";
  import { Checkbox, FloatingLabelInput, Helper } from "flowbite-svelte";
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

<section class="relative py-6 sm:py-10">
  <div
    class="w-full bg-base-100 sm:rounded-lg sm:shadow md:mt-0 sm:mx-auto sm:max-w-md xl:p-0"
  >
    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
      <form class="flex flex-col space-y-6" action="/">
        <h3 class="text-xl font-medium">Register</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 between gap-6">
          <FloatingLabelInput
            required
            type="text"
            name="first-name"
            id="first-name"
            bind:value={firstName}>First name</FloatingLabelInput
          >

          <FloatingLabelInput
            required
            type="text"
            name="last-name"
            id="last-name"
            bind:value={lastName}>Last name</FloatingLabelInput
          >
        </div>

        <FloatingLabelInput
          required
          type="email"
          name="email"
          id="email"
          bind:value={email}>Email</FloatingLabelInput
        >

        <FloatingLabelInput
          required
          type="password"
          name="password"
          id="password"
          bind:value={password}>Password</FloatingLabelInput
        >
        <label class="label cursor-pointer gap-2 max-w-fit">
          <span class="label-text">Remember me</span>
          <input type="checkbox" checked="checked" class="checkbox checkbox-s" />
        </label>
        <button class="btn btn-primary" on:click={handleSignUp}>Register</button
        >
        <p class="text-sm font-light">
          Already have an account? <a
            href="/auth/login"
            class="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >Log in</a
          >
        </p>
      </form>
    </div>
  </div>
</section>
