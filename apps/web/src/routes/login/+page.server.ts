import { getCredentials, saveCredential } from '$lib/mastodon/app/credentials.js';
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

		let credentials = getCredentials(cookies);

		if (!credentials) {
			const respCredentials = await createMastodonApp(server);
			if (!respCredentials) {
				return;
			}
			credentials = respCredentials;
			saveCredential(credentials, cookies);
		}

		credentials;
		const authURL = redirectToAuth(credentials, server);
		throw redirect(301, authURL);
	}
};
