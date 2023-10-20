<script lang="ts">
	import { login } from '../lib/mastodon/auth';

	async function onSubmit(e: Event) {
		const formData = new FormData(e.target as HTMLFormElement);
		const server = formData.get('server') as string;
		if (!server) {
			return;
		}
		await login(server);
	}
</script>

<div class="mx-auto max-w-md space-y-6 flex flex-col h-screen px-8 mt-[15vh]">
	<div class="space-y-2 text-center">
		<h1 class="text-3xl font-bold">Sign Up</h1>
		<p class="text-zinc-500 dark:text-zinc-400">
			Enter your information to create a Mastodon account
		</p>
	</div>
	<form on:submit|preventDefault={onSubmit} class="space-y-4">
		<div class="space-y-2">
			<label
				class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
				for="username">Server</label
			><input
				class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
				id="server"
				name="server"
				value="mastodon.social"
				placeholder="server"
				required
			/>
		</div>
		<button class="btn w-full" type="submit"> Sign Up </button>
	</form>
</div>
