import { error } from '@sveltejs/kit';
import { getCredentials, createMastodonApp } from '../app';
import { createAuthToken } from './create_auth_token';

export async function login(server: string) {
	let credentials = getCredentials();

	if (!credentials) {
		const resp = await createMastodonApp(server);

		if (!resp) {
			throw error(500, 'Failed to create Mastodon app');
		}
		credentials = resp;
	}

	await createAuthToken(credentials, server);
}
