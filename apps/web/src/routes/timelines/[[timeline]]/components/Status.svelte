<script lang="ts">
	import type { mastodon } from 'masto';

	export let status: mastodon.v1.Status;
</script>

<div class="card">
	<h2 class="card-title">{status.account.acct}</h2>
	ignore this
	<!-- svelte-ignore svelte/no-at-html-tags -->
	{@html status.content}
</div>
