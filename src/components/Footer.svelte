<script>
  import { Section } from "flowbite-svelte-blocks";
  import {
    FacebookSolid,
    GithubSolid,
    LinkedinSolid,
  } from "flowbite-svelte-icons";
  import {
    Footer,
    FooterBrand,
    FooterLinkGroup,
    FooterLink,
    FooterCopyright,
    FooterIcon,
  } from "flowbite-svelte";

  import logo from "$lib/images/logo.png";
</script>

<Footer class="bg-base" footerType="socialmedia">
  <div class="mx-auto max-w-screen-xl text-center">
    <FooterBrand
      href="/"
      src={logo}
      alt="impressd Logo"
      aClass="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
    />
    <p class="my-6 text-gray-500 dark:text-gray-400">
      Open-source library of over 400+ web components and interactive elements
      built for better web.
    </p>
    <FooterLinkGroup
      ulClass="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white"
    >
      <FooterLink liClass="" aClass="mr-4 hover:underline md:mr-6" href="/"
        >About</FooterLink
      >
      <FooterLink liClass="" aClass="mr-4 hover:underline md:mr-6" href="/"
        >Premium</FooterLink
      >
      <FooterLink liClass="" aClass="mr-4 hover:underline md:mr-6" href="/"
        >Campaigns</FooterLink
      >
      <FooterLink liClass="" aClass="mr-4 hover:underline md:mr-6" href="/"
        >Blog</FooterLink
      >
      <FooterLink liClass="" aClass="mr-4 hover:underline md:mr-6" href="/"
        >Affiliate Program</FooterLink
      >
      <FooterLink liClass="" aClass="mr-4 hover:underline md:mr-6" href="/"
        >FAQs</FooterLink
      >
      <FooterLink liClass="" aClass="mr-4 hover:underline md:mr-6" href="/"
        >Contact</FooterLink
      >
    </FooterLinkGroup>
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
      >© 2021-2023 <a href="/" class="hover:underline">impressd</a>. All Rights
      Reserved.</span
    >
  </div>
</Footer>
