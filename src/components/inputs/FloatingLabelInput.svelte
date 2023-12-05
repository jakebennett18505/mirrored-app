<script lang="ts">
  import { twMerge } from "tailwind-merge";

  export let id: string = generateId();
  export let style: "outlined" | "standard" = "outlined";
  export let type:
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "reset"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week"
    | "search" = "text";
  export let size: "small" | "default" = "default";
  export let color: "base" | "green" | "red" = "base";
  export let value: any = undefined;

  let n = Date.now();

  function generateId() {
    return (++n).toString(36);
  }

  const divClasses = {
    outlined: "relative",
    standard: "relative z-0",
  };

  const inputSizes = {
    outlined: {
      small: "px-2.5 pb-1.5 pt-3",
      default: "px-2.5 pb-2.5 pt-4",
    },
    standard: {
      small: "py-2 px-0",
      default: "py-2.5 px-0",
    },
  };

  const labelSizes = {
    outlined: {
      small: "top-1",
      default: "top-2",
    },
    standard: {
      small: "top-3",
      default: "top-3",
    },
  };

  const inputClasses = {
    outlined:
      "block w-full text-sm bg-transparent rounded-lg border appearance-none  focus:outline-none focus:ring-0 peer",
    standard:
      "block w-full text-sm bg-transparent border-0 border-b-2 appearance-none dark:text-white  focus:outline-none focus:ring-0 peer",
  };

  const labelClasses = {
    outlined:
      "absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-1 origin-left rtl:origin-right bg-base-100 px-2 peer-focus:px-2  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 start-1",
    standard:
      "absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left rtl:origin-right peer-focus:start-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
  };

  const inputColorClasses = {
    base: "border-neutral/30 focus:border-primary",
    green: "border-success/30 focus:border-success",
    red: "border-error/30 focus:border-error",
  };

  const labelColorClasses = {
    base: "text-neutral/70 peer-focus:text-primary",
    green: "text-success/70 peer-focus:text-success",
    red: "text-error/70 peer-focus:text-error",
  };
</script>

<div class={twMerge(divClasses[style], $$props.classDiv)}>
  <input
    {id}
    {...$$restProps}
    bind:value
    on:blur
    on:change
    on:click
    on:focus
    on:input
    on:keydown
    on:keypress
    on:keyup
    on:mouseenter
    on:mouseleave
    on:mouseover
    on:paste
    {...{ type }}
    placeholder=" "
    class={twMerge(
      inputClasses[style],
      inputColorClasses[color],
      inputSizes[style][size],
      $$props.classInput,
    )} />

  <label
    for={id}
    class={twMerge(
      labelClasses[style],
      labelColorClasses[color],
      labelSizes[style][size],
      $$props.classLabel,
    )}>
    <slot />
  </label>
</div>