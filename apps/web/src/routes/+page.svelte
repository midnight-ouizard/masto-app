<script>
	import Status from './components/Status.svelte';

	export let data;
	$: statuses = data?.statuses;
</script>

<div class="mx-auto max-w-md space-y-6 flex flex-col h-screen px-8 mt-[8vh]">
	<div class="space-y-2 text-center">
		<h1 class="text-3xl font-bold">Timeline</h1>
	</div>
	{#each statuses as status}
		<Status {status} />
	{/each}
</div>
