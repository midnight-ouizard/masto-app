<script>
	import Name from './Name.svelte';
	export let avatar = '';
	export let displayName = '';
	export let account = '';
</script>

<div class="flex flex-row space-x-2">
	<div class="avatar">
		<div class="w-14 rounded-xl">
			<img src={avatar} alt="profile avatar" />
		</div>
	</div>

	<Name {displayName} {account} />
</div>
