<script>
  import {
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
    Dropdown,
    DropdownItem,
    DropdownHeader,
    DropdownDivider,
    Button,
    Avatar,
    DarkMode,
  } from "flowbite-svelte";
  import { ChevronDownOutline } from "flowbite-svelte-icons";
  import Logo from "/src/components/Logo.svelte";
  import profilePicture from "$lib/images/profile-picture-3.webp";
  import { page } from "$app/stores";

  // Session handling
  const { supabase, session } = $page.data;

  $: activeUrl = $page.url.pathname;
  async function handleSignOut() {
    try {
      // Call the signOut method to sign the user out
      const { error } = await supabase.auth.signOut();

      if (error) {
        // Handle any errors that may occur during sign-out
        console.error("Sign-out error:", error.message);
      } else {
        // Redirect to the homepage or any desired page after successful sign-out
        window.location.href = "/"; // You can change the URL as needed
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  }

  //Nav items
  export const navList = [
    {
      name: "Locations",
      link: "/locations",
      subLinks: [
        { name: "All", link: "/locations" },
        { name: "Berlin", link: "/berlin" },
        { name: "London", link: "/london" },
        { name: "Paris", link: "/paris" },
        { name: "Amsterdam", link: "/amsterdam" },
      ],
    },
    {
      name: "Gallery",
      link: "/art",
    },
    {
      name: "Artists",
      link: "/artist/1",
      subLinks: [
        { name: "All", link: "/artist/1" },
        { name: "New", link: "/artist/new" },
        { name: "Exhibiting", link: "/artist/exhibiting" },
      ],
    },
  ];
</script>

<Navbar color="base">
  <NavBrand href="/">
    <Logo />
  </NavBrand>
  <div class="flex md:order-2">
    <DarkMode class="mx-4" />

    {#if !session}
      <Button size="sm">Sign up</Button>
    {:else}
      <Avatar
        id="user-drop"
        src={profilePicture}
        class="cursor-pointer"
        dot={{ color: "green" }}
      />
      <Dropdown triggeredBy="#user-drop">
        <DropdownHeader>
          <span class="block text-sm">Bonnie Green</span>
          <span class="block truncate text-sm font-medium"
            >name@flowbite.com</span
          >
        </DropdownHeader>
        <DropdownItem>Dashboard</DropdownItem>
        <DropdownItem>Settings</DropdownItem>
        <DropdownItem>Earnings</DropdownItem>
        <DropdownItem on:click={handleSignOut} slot="footer"
          >Sign out</DropdownItem
        >
      </Dropdown>
    {/if}
    <NavHamburger />
  </div>
  <NavUl>
    {#each navList as nav}
      {#if !nav.subLinks}
        <NavLi
          class="font-light text-lg cursor-pointer md:text-base"
          href={nav.link}>{nav.name}</NavLi
        >
      {:else}
        <NavLi class="font-light text-lg cursor-pointer md:text-base">
          {nav.name}<ChevronDownOutline
            class="w-3 h-3 ml-2 text-primary-800 dark:text-white inline"
          />
        </NavLi>
        <Dropdown class="w-44 z-20">
          {#each nav.subLinks as sublink}
            <DropdownItem class="font-light text-base" href={sublink.link}
              >{sublink.name}</DropdownItem
            >
          {/each}
        </Dropdown>
      {/if}
    {/each}
  </NavUl>
</Navbar>
