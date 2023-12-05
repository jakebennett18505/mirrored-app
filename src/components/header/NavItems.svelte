<script>
  import NavItem from "./NavItem.svelte";

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

{#each navList as navItem}
  <NavItem {navItem} />
{/each}
