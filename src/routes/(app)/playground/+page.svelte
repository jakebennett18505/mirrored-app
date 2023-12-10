<script lang="ts">
	import { Splide, SplideSlide } from '@splidejs/svelte-splide'
	import { onMount } from 'svelte'
	import '@splidejs/svelte-splide/css'

	let main: Splide
	let thumbs: SplideSlide

	function generateSlides(length = 10, sig = 0): Array<{ src: string; alt: string }> {
		return Array.from({ length }).map((_, index) => {
			index = sig || index

			return {
				src: `https://source.unsplash.com/random/800x450?sig=${index}`,
				alt: `Image ${index}`
			}
		})
	}

	const slides = generateSlides()

	const mainOptions = {
		type: 'loop',
		perPage: 2,
		perMove: 1,
		gap: '1rem',
		pagination: false,
		height: '10rem'
	}

	const thumbsOptions = {
		type: 'slide',
		rewind: true,
		gap: '1rem',
		pagination: false,
		fixedWidth: 110,
		fixedHeight: 70,
		cover: true,
		focus: 'center' as const,
		isNavigation: true,
		updateOnMove: true
	}

	onMount(() => {
		if (main && thumbs) {
			main.sync(thumbs.splide)
		}
	})
</script>

<div class="wrapper">
	<h2 id="thumbnails-example-heading">Thumbnails</h2>

	<Splide options={mainOptions} bind:this={main} aria-labelledby="thumbnails-example-heading">
		{#each slides as slide}
			<SplideSlide>
				<img src={slide.src} alt={slide.alt} />
			</SplideSlide>
		{/each}
	</Splide>

	<Splide options={thumbsOptions} bind:this={thumbs}>
		{#each slides as slide}
			<SplideSlide>
				<img src={slide.src} alt={slide.alt} />
			</SplideSlide>
		{/each}
	</Splide>
</div>
