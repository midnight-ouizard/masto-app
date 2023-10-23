<script>
	import LoginForm from './components/LoginForm.svelte';
</script>

<div class="mx-auto max-w-md space-y-6 flex flex-col h-screen px-8 mt-[15vh]">
	<div class="space-y-2 text-center">
		<h1 class="text-3xl font-bold">Login to Mastodon</h1>
		<p class="text-zinc-500 dark:text-zinc-400">
			Enter your information to login to your Mastodon Account
		</p>
	</div>
	<LoginForm />
</div>
