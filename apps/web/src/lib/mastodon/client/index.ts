import { redirect, type Cookies } from '@sveltejs/kit';
import { getAuthCredentials } from '../auth/get_auth_credentials';
import { createRestAPIClient, type mastodon } from 'masto';

export type Client = mastodon.rest.Client;

export function createMastoClientFromCookies(cookies: Cookies): Client {
	const authCredentials = getAuthCredentials(cookies);

	if (!authCredentials?.oathToken || !authCredentials?.url) {
		throw redirect(303, '/login');
	}
	const masto = createRestAPIClient({
		url: authCredentials.url,
		accessToken: authCredentials.oathToken
	});

	return masto;
}
