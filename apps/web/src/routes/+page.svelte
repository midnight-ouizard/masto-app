<script>
	import Status from '$lib/components/Status/Status.svelte';

	export let data;
	$: statuses = data?.statuses;
</script>

<div class="space-y-6 flex flex-col px-8 mt-[8vh]">
	<div class="space-y-2 text-center">
		<h1 class="text-3xl font-bold">Timeline</h1>
		<form action="/?/signout" method="POST">
			<button type="submit" class="btn btn-error">Sign out</button>
		</form>
	</div>
	{#each statuses as status}
		<Status {status} />
	{/each}
</div>
