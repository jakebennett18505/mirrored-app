<script>
	// Only import what you need!
	import { Edit2Icon, InstagramIcon, Share2Icon } from 'svelte-feather-icons';
</script>

<div class="wrapper">
	<div class="icon-wrapper">
		<Edit2Icon size="24" strokeWidth="1" />
	</div>
	<div class="icon-wrapper">
		<InstagramIcon size="24" strokeWidth="1" />
	</div>
	<div class="icon-wrapper">
		<Share2Icon size="24" strokeWidth="1" />
	</div>
</div>

<style>
	.wrapper {
		display: flex;
        flex-direction: row;
        min-width: 40px;
		gap: 4px;
        justify-content: flex-end;
	}

    .icon-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        border-radius: 100%;
    }

    .icon-wrapper:hover {
        background-color: var(--neutral-10);
    }
</style>
