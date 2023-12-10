<script>
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide'
	import '@splidejs/svelte-splide/css/core'
	import { onMount } from 'svelte'

	export let images

	let main
	let thumbs
	let galleryLoading = true

	const slides = images

	const mainOptions = {
		type: 'fade',
		rewind: true,
		pagination: false,
		arrows: false,
		height: '600px',
		lazyLoad: 'nearby',
		breakpoints: {
			768: {
				focus: 'center',
				height: '400px'
			}
		}
	}

	const thumbsOptions = {
		arrows: false,
		direction: 'ttb',
		height: '600px',
		fixedWidth: 100,
		fixedHeight: 75,
		gap: 10,
		rewind: true,
		pagination: false,
		focus: 'start',
		isNavigation: true,
		breakpoints: {
			768: {
				direction: 'ltr',
				fixedWidth: 80,
				fixedHeight: 60,
				width: '94vw'
			}
		}
	}

	onMount(() => {
		if (main && thumbs) {
			main.sync(thumbs.splide)
			galleryLoading = false
		}
	})
</script>

{#if galleryLoading}
	<div class="flex w-full flex-col gap-8 md:flex-row-reverse h-[500px] md:h-[600px]">
		<div class="grow h-full skeleton"></div>
		<div class="w-full h-[100px] md:w-[100px] md:h-full skeleton"></div>
	</div>
{/if}

<div
	class="flex flex-col gap-8 md:flex-row-reverse min-h-[500px] md:min-h-[600px] {galleryLoading
		? 'hidden'
		: ''}">
	<Splide options={mainOptions} bind:this={main} aria-labelledby="thumbnails-example-heading">
		{#each slides as slide}
			<SplideSlide>
				<img src={slide.imagePath} alt={slide.description} class="h-full w-full object-contain" />
			</SplideSlide>
		{/each}
	</Splide>

	<Splide options={thumbsOptions} bind:this={thumbs}>
		{#each slides as slide}
			<SplideSlide>
				<img src={slide.imagePath} alt={slide.description} class="w-full h-full object-cover" />
			</SplideSlide>
		{/each}
	</Splide>
</div>

<style>
	:global(.splide__arrow) {
		/* all: unset; */
		align-items: center;
		background: oklch(var(--b2));
		border: 0;
		border-radius: 0;
		cursor: pointer;
		display: flex;
		height: 100%;
		justify-content: center;
		opacity: 0.7;
		padding: 0;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		width: 1em;
		z-index: 1;
	}

	:global(.splide__arrow--prev) {
		left: 0;
	}
	:global(.splide__arrow--next) {
		right: 0;
	}

	:global(.splide__slide) {
		opacity: 0.6;
	}

	:global(.splide__slide.is-active) {
		opacity: 1;
	}
</style>
