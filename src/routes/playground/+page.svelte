<!-- This is a playground to play with different ideas -->

<script>
  import { page } from "$app/stores";

  //Session handling
  const supabase = $page.data.supabase;
  const session = $page.data.session;
</script>

<section class="section">
  <!-- Some navbar ideas -->
  <div class="container">
    <div class="navbar bg-base-100">
      <div class="flex-1">
        <a class="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li><a>Link</a></li>
          <li>
            <details>
              <summary> Parent </summary>
              <ul class="p-2 bg-base-100 rounded-t-none">
                <li><a>Link 1</a></li>
                <li><a>Link 2</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div class="flex-none gap-2">
        <div class="dropdown dropdown-end">
          {#if !session}
            <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                ><path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h7"
                /></svg
              >
            </div>
          {:else}
            <div
              tabindex="0"
              role="button"
              class="btn btn-ghost btn-circle avatar"
            >
              <div class="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
          {/if}
          <ul
            class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a class="justify-between">
                Profile
                <span class="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="section">
  <div class="container">
    <!-- Open the modal using ID.showModal() method -->
    <button class="btn btn-primary" onclick="my_modal_5.showModal()">open modal</button>
    <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
      <div class="modal-box">
        <h3 class="font-bold text-lg">Hello!</h3>
        <p class="py-4">Press ESC key or click the button below to close</p>
        <div class="modal-action">
          <form method="dialog">
            <!-- if there is a button in form, it will close the modal -->
            <button class="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  </div>
</section>

<!-- Modal -->
<style>
  .container {
    border-radius: 10px;
    padding: 20px;
    background-color: var(--neutral-10);
  }
</style>
