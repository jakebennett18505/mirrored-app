<script>
  import { InstagramIcon } from "svelte-feather-icons";
  import {
    Footer,
    DarkMode,
    FooterLinkGroup,
    FooterLink,
    FooterCopyright,
  } from "flowbite-svelte";
  import Logo from "/src/components/Logo.svelte";

  export let smallFooter = false;
  const footerLinks = [
    {
      name: "About",
      link: "/about",
    },
    {
      name: "FAQs",
      link: "/faq",
    },
    {
      name: "Become a location",
      link: "/for-locations",
    },
    {
      name: "Privacy Policy",
      link: "/privacy",
    },
    {
      name: "Exhibition Policy",
      link: "/exhibition",
    },
    {
      name: "imprint",
      link: "/imprint",
    },
  ];
</script>

{#if smallFooter}
  <Footer class="flex items-center p-2 flex-col lg:justify-between md:flex-row">
    <FooterCopyright href="/" by="impressd" />
    <FooterLinkGroup
      ulClass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0"
    >
      {#each footerLinks as link}
        <FooterLink href={link.link}>{link.name}</FooterLink>
      {/each}
      <DarkMode size="md" />
    </FooterLinkGroup>
  </Footer>
{:else}
  <Footer class="bg-inherit" footerType="socialmedia">
    <div class="mx-auto max-w-screen-xl text-center">
      <Logo />
      <FooterLinkGroup
        ulClass="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white"
      >
        {#each footerLinks as link}
          <FooterLink
            liClass=""
            aClass="mr-4 hover:underline md:mr-6"
            href={link.link}>{link.name}</FooterLink
          >
        {/each}
      </FooterLinkGroup>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-2" />
    <div class="sm:flex sm:items-center sm:justify-between">
      <FooterCopyright href="/" by="impressd" />
      <div class="flex mt-4 items-center space-x-2 sm:justify-center sm:mt-0">
        <a target="_blank" href="https://www.instagram.com/impressd.de/">
          <InstagramIcon
            class="w-6 h-6 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
          />
        </a>
        <DarkMode size="md" />
      </div>
    </div>
  </Footer>
{/if}
