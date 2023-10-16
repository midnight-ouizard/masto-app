<script>
	import '../app.css';
	import { fade } from 'svelte/transition';
	export let data;
</script>

{#key data.url}
	<div in:fade={{ duration: 300, delay: 400 }} out:fade={{ duration: 300 }}>
		<slot />
	</div>
{/key}
