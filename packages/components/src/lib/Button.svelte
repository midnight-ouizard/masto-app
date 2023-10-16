<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let type: 'button' | 'link' = 'button';
	export let color: 'black' | 'white' = 'white';
	const dispatcher = createEventDispatcher();

	const onClick = () => {
		dispatcher('click');
	};

	export let link = '/';
</script>

{#if type === 'button'}
	<button
		class:bg-black={color === 'black'}
		class:bg-white={color === 'white'}
		class="text-sm font-semibold px-3 py-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
		on:click={onClick}
	>
		<slot />
	</button>
{:else}
	<a
		class:bg-black={color === 'black'}
		class:bg-white={color === 'white'}
		class="text-sm font-semibold px-3 py-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
		href={link}
	>
		<slot />
	</a>
{/if}

<style>
	.bg-white {
		background-color: #ffffff;
		color: #000;
	}

	.bg-black {
		background-color: #000000;
		color: #fff;
	}
</style>
