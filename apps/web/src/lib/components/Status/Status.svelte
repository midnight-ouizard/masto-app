<script lang="ts">
	import type { mastodon } from 'masto';
	import Header from './Header/Header.svelte';

	export let status: mastodon.v1.Status;
	console.log({ status });
</script>

<div class="card border-2 border-black p-2 space-y-2">
	<Header
		avatar={status.account.avatar}
		displayName={status.account.displayName}
		account={status.account.acct}
	/>

	<!-- eslint-disable svelte/no-at-html-tags -->
	{@html status.content}

	{#if status.reblog}
		<div class="px-2">
			<Header
				avatar={status.reblog.account.avatar}
				displayName={status.reblog.account.displayName}
				account={status.reblog.account.acct}
			/>

			<!-- eslint-disable svelte/no-at-html-tags -->
			{@html status.reblog.content}
		</div>
	{/if}
</div>
