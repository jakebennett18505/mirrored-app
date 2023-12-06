<script>
  import FloatingLabelInput from "./inputs/FloatingLabelInput.svelte";
  import { signUp, signIn } from "./auth.js";
  import { page } from "$app/stores";

  export let login = false;

  let { supabase } = $page.data;

  let email;
  let password;
  let firstName;
  let lastName;

  async function handleSignUp() {
    await signUp(supabase, email, password);
  }

  async function handleSignIn() {
    await signIn(supabase, email, password);
  }
</script>

<div
  class="w-full bg-base-100 sm:max-w-[500px]  md:mt-0 sm:mx-auto xl:p-0">
  <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
    {#if !login}
      <form class="flex flex-col space-y-6" action="/">
        <h5>Sign up</h5>
        <div class="grid grid-cols-1 sm:grid-cols-2 between gap-6">
          <FloatingLabelInput
            required
            type="text"
            name="first-name"
            id="first-name"
            bind:value={firstName}>First name</FloatingLabelInput>

          <FloatingLabelInput
            required
            type="text"
            name="last-name"
            id="last-name"
            bind:value={lastName}>Last name</FloatingLabelInput>
        </div>

        <FloatingLabelInput
          required
          type="email"
          name="email"
          id="email"
          bind:value={email}>Email</FloatingLabelInput>

        <FloatingLabelInput
          required
          type="password"
          name="password"
          id="password"
          bind:value={password}>Password</FloatingLabelInput>
        <label class="label cursor-pointer gap-2 max-w-fit">
          <span class="label-text">Remember me</span>
          <input
            type="checkbox"
            checked="checked"
            class="checkbox checkbox-s" />
        </label>
        <button class="btn btn-primary" on:click={handleSignUp}>Sign up</button>
        <p class="text-sm font-light">
          Already have an account? <a
            href="/auth/login"
            class="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >Log in</a>
        </p>
      </form>
    {:else}
      <form class="flex flex-col space-y-6" action="/">
        <h5>Log in</h5>

        <FloatingLabelInput
          required
          type="email"
          name="email"
          id="email"
          bind:value={email}>Email</FloatingLabelInput>

        <FloatingLabelInput
          required
          type="password"
          name="password"
          id="password"
          bind:value={password}>Password</FloatingLabelInput>
        <label class="label cursor-pointer gap-2 max-w-fit">
          <span class="label-text">Remember me</span>
          <input
            type="checkbox"
            checked="checked"
            class="checkbox checkbox-s" />
        </label>
        <button class="btn btn-primary" on:click={handleSignIn}>Log in</button>
        <p class="text-sm font-light">
          Don't have an account yet? <a
            href="/auth/signup"
            class="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >Sign up</a>
        </p>
      </form>
    {/if}
  </div>
</div>
