<script lang="ts">
	import type { Status } from '$lib/mastodon/timeline/types';

	export let status: Status;
</script>

<div class="card">
	<h2 class="card-title">{status.account.acct}</h2>
	{@html status.content}
</div>
