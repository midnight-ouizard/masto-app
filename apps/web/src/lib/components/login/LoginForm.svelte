<script lang="ts">
	import { enhance } from '$app/forms';
	import LoadingRing from '$lib/components/LoadingRing.svelte';
	import type { SubmitFunction } from '@sveltejs/kit';

	let loading = false;
	const onLoading: SubmitFunction = async () => {
		loading = true;
		return async ({ update }) => {
			loading = false;
			await update();
		};
	};
</script>

<form use:enhance={onLoading} method="POST" action="?/login" class="space-y-4">
	<div class="space-y-2">
		<label
			class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
			for="server">Server</label
		><input
			class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
			id="server"
			name="server"
			value="mastodon.social"
			placeholder="server"
			required
		/>
	</div>
	<button class="btn w-full" type="submit">
		{#if loading}
			<LoadingRing />
		{:else}
			Login
		{/if}
	</button>
</form>
