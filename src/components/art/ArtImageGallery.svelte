<script>
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide'
	import '@splidejs/svelte-splide/css'
	import { onMount } from 'svelte'

	export let images

	let main
	let thumbs

	const slides = images

	const mainOptions = {
		type: 'fade',
		rewind: true,
		pagination: false,
		arrows: false,
		height: '600px',
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
				width: '94vw',
				arrows: true,
				padding: '1rem'
			}
		}
	}

	onMount(() => {
		if (main && thumbs) {
			main.sync(thumbs.splide)
		}
	})
</script>

<div class="flex flex-col gap-8 md:flex-row-reverse">
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
</style>
