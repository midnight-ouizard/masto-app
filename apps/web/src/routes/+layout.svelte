<script>
	import '../app.css';
	import { ViewTransition } from '@mouizard/svelte';
	export let data;
</script>

<!-- <ViewTransition url={data?.url}> -->
<slot />
<!-- </ViewTransition> -->
