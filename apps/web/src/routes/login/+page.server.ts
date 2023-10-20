import { saveCredentialCookies } from '$lib/mastodon/app/credentials.js';
import { redirectToAuth } from '$lib/mastodon/auth/redirect_to_auth';
import { createMastodonApp } from '$lib/mastodon/index.js';
import { redirect } from '@sveltejs/kit';

export const actions = {
	login: async ({ request, cookies }) => {
		const formData = await request.formData();
		const server = formData.get('server') as string;
		if (!server) {
			return;
		}

		let credentials;

		if (!credentials) {
			const respCredentials = await createMastodonApp(server);
			if (!respCredentials) {
				return;
			}
			credentials = respCredentials;
			console.log({ respCredentials });
			saveCredentialCookies(credentials, cookies);
		}

		credentials;
		const authURL = redirectToAuth(credentials, server);
		console.log({ loginActionRedirectTo: authURL });
		throw redirect(301, authURL);
	}
};
