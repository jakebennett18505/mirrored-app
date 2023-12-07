<!-- // src/routes/auth/+page.svelte -->
<script>
  import FloatingLabelInput from "/src/components/inputs/FloatingLabelInput.svelte";
  import { signIn } from "../auth";

  export let data;

  let { supabase } = data;
  $: ({ supabase } = data);

  let email;
  let password;

  async function handleSignIn() {
    await signIn(supabase, email, password);
  }
</script>

<section class="relative py-6 sm:py-10">
  <div
    class="w-full bg-base-100 sm:rounded-lg sm:shadow md:mt-0 sm:mx-auto sm:max-w-md xl:p-0">
    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
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
        <button class="btn btn-primary" on:click={handleSignIn}
          >Log in</button>
        <p class="text-sm font-light">
          Don't have an account yet? <a
            href="/auth/signup"
            class="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >Sign up</a>
        </p>
      </form>
    </div>
  </div>
</section>
