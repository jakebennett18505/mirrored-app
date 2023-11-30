<script>
  import {
    Section,
    ContentWithImage,
    News,
    HeroHeader,
    HeroBody,
    FeatureDefault,
    FeatureItem,
    Quotes,
    Testimonial,
    TestimonialCard,
    TestimonialCardItem,
    Cta,
  } from "flowbite-svelte-blocks";

  import { Button } from "flowbite-svelte";
  import {
    ArrowRightSolid,
    ChartSolid,
    LandmarkSolid,
    BriefcaseSolid,
    DollarSolid,
    RocketSolid,
    CogOutline,
  } from "flowbite-svelte-icons";
  import { page } from "$app/stores";
  import Airbnb from "$lib/images/Airbnb.svelte";

  const session = $page.data.session;
</script>

<div class="container">
  <Section name="heroVisual">
    <div class="mr-auto place-self-center lg:col-span-7">
      <HeroHeader
        h1Class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
        pClass="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
      >
        <svelte:fragment slot="h1"
          >Payments tool for software companies</svelte:fragment
        >
        <svelte:fragment slot="paragraph"
          >From checkout to global sales tax compliance, companies around the
          world use Flowbite to simplify their payment stack.</svelte:fragment
        >
        <a href="/"
          ><Button
            size="xl"
            class="inline-flex items-center justify-center mr-3"
            >Get started<ArrowRightSolid size="md" class="ml-2 -mr-1" /></Button
          >
        </a>
        <a href="/"
          ><Button
            color="light"
            size="xl"
            class="inline-flex items-center justify-center"
            >Speak to Sales</Button
          >
        </a>
      </HeroHeader>
    </div>
    <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
      <img
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
        alt="mockup"
      />
    </div>
  </Section>
  <Section name="logos">
    <HeroHeader>
      <svelte:fragment slot="h2">You’ll be in good company</svelte:fragment>
      <div
        class="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400"
      >
        <a href="/" class="flex justify-center items-center">
          <Airbnb />
        </a>
        <a href="/" class="flex justify-center items-center">
          <Airbnb />
        </a>
        <a href="/" class="flex justify-center items-center">
          <Airbnb />
        </a>
        <a href="/" class="flex justify-center items-center">
          <Airbnb />
        </a>
        <a href="/" class="flex justify-center items-center">
          <Airbnb />
        </a>
        <a href="/" class="flex justify-center items-center">
          <Airbnb />
        </a>
      </div>
    </HeroHeader>
  </Section>
  <Section name="feature">
    <HeroHeader
      class="max-w-screen-md mb-8 lg:mb-16"
      h2Class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
      pClass="text-gray-500 sm:text-xl dark:text-gray-400"
    >
      <svelte:fragment slot="h2"
        >Designed for business teams like yours</svelte:fragment
      >
      <svelte:fragment slot="paragraph"
        >Here at Flowbite we focus on markets where technology, innovation, and
        capital can unlock long-term value and drive economic growth.</svelte:fragment
      >
    </HeroHeader>
    <FeatureDefault>
      <FeatureItem>
        <svelte:fragment slot="icon"
          ><ChartSolid
            class="text-primary-600 dark:text-primary-300"
          /></svelte:fragment
        >
        <svelte:fragment slot="h3">Marketing</svelte:fragment>
        <svelte:fragment slot="paragraph"
          >Plan it, create it, launch it. Collaborate seamlessly with all the
          organization and hit your marketing goals every month with our
          marketing plan.</svelte:fragment
        >
      </FeatureItem>
      <FeatureItem>
        <svelte:fragment slot="icon"
          ><LandmarkSolid
            class="text-primary-600 dark:text-primary-300"
          /></svelte:fragment
        >
        <svelte:fragment slot="h3">Legal</svelte:fragment>
        <svelte:fragment slot="paragraph"
          >Protect your organization, devices and stay compliant with our
          structured workflows and custom permissions made for you.</svelte:fragment
        >
      </FeatureItem>
      <FeatureItem>
        <svelte:fragment slot="icon"
          ><BriefcaseSolid
            class="text-primary-600 dark:text-primary-300"
          /></svelte:fragment
        >
        <svelte:fragment slot="h3">Business Automation</svelte:fragment>
        <svelte:fragment slot="paragraph"
          >Auto-assign tasks, send Slack messages, and much more. Now power up
          with hundreds of new templates to help you get started.</svelte:fragment
        >
      </FeatureItem>
      <FeatureItem>
        <svelte:fragment slot="icon"
          ><DollarSolid
            class="text-primary-600 dark:text-primary-300"
          /></svelte:fragment
        >
        <svelte:fragment slot="h3">Finance</svelte:fragment>
        <svelte:fragment slot="paragraph"
          >Audit-proof software built for critical financial operations like
          month-end close and quarterly budgeting.</svelte:fragment
        >
      </FeatureItem>
      <FeatureItem>
        <svelte:fragment slot="icon"
          ><RocketSolid
            class="text-primary-600 dark:text-primary-300"
          /></svelte:fragment
        >
        <svelte:fragment slot="h3">Enterprise Design</svelte:fragment>
        <svelte:fragment slot="paragraph"
          >Craft beautiful, delightful experiences for both marketing and
          product with real cross-company collaboration.</svelte:fragment
        >
      </FeatureItem>
      <FeatureItem>
        <svelte:fragment slot="icon"
          ><CogOutline
            class="text-primary-600 dark:text-primary-300"
          /></svelte:fragment
        >
        <svelte:fragment slot="h3">Operations</svelte:fragment>
        <svelte:fragment slot="paragraph"
          >Keep your company’s lights on with customizable, iterative, and
          structured workflows built for all efficient teams and individual.</svelte:fragment
        >
      </FeatureItem>
    </FeatureDefault>
  </Section>
  <Section name="testimonial">
    <Testimonial icon={Quotes}>
      <blockquote>
        <p class="text-2xl font-medium text-gray-900 dark:text-white">
          "Flowbite is just awesome. It contains tons of predesigned components
          and pages starting from login screen to complex dashboard. Perfect
          choice for your next SaaS application."
        </p>
      </blockquote>
      <svelte:fragment slot="footer">
        <img
          class="w-6 h-6 rounded-full"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
          alt="michael profile"
        />
        <div
          class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700"
        >
          <div class="pr-3 font-medium text-gray-900 dark:text-white">
            Micheal Gough
          </div>
          <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
            CEO at Google
          </div>
        </div>
      </svelte:fragment>
    </Testimonial>
  </Section>
  <Section name="ctawithimg">
    <Cta ctatype="image">
      <svelte:fragment slot="img">
        <img
          class="w-full dark:hidden"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
          alt="dashboard"
        />
        <img
          class="w-full hidden dark:block"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
          alt="dashboard"
        />
      </svelte:fragment>
      <svelte:fragment slot="h2"
        >Let's create more tools and ideas that brings us together.</svelte:fragment
      >
      <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
        Flowbite helps you connect with friends and communities of people who
        share your interests. Connecting with your friends and family as well as
        discovering new ones is easy with features like Groups.
      </p>
      <a
        href="/"
        class="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
      >
        Get started
        <ArrowRightSolid size="md" class="ml-2 -mr-1" />
      </a>
    </Cta>
  </Section>
</div>
