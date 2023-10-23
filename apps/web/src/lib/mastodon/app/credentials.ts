import type { Cookies } from '@sveltejs/kit';
import type { Credentials } from './types';

export function saveCredential(credentials: Credentials, cookies: Cookies) {
	cookies.set('masto_client_id', credentials.clientId, {
		path: '/'
	});
	cookies.set('masto_client_secret', credentials.clientSecret, {
		path: '/'
	});

	cookies.set('masto_server_url', credentials.serverURL, {
		path: '/'
	});
}

export function getCredentials(cookies: Cookies): Credentials | undefined {
	const clientId = cookies.get('masto_client_id');
	const clientSecret = cookies.get('masto_client_secret');
	const serverURL = cookies.get('masto_server_url');
	if (clientId && clientSecret && serverURL) {
		return { clientId, clientSecret, serverURL };
	}
	return undefined;
}
