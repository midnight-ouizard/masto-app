import type { Cookies } from '@sveltejs/kit';
import type { AppResponse, Credentials } from './types';

export function saveCredentials(appResponse: AppResponse) {
	localStorage.setItem('masto_client_id', appResponse.client_id);
	localStorage.setItem('masto_client_secret', appResponse.client_secret);
}

export function getCredentials(): Credentials | undefined {
	const clientId = localStorage.getItem('masto_client_id');
	const clientSecret = localStorage.getItem('masto_client_secret');
	const serverURL = localStorage.getItem('masto_server_url');
	if (clientId && clientSecret && serverURL) {
		return { clientId, clientSecret, serverURL };
	}
	return undefined;
}

export function saveCredentialCookies(credentials: Credentials, cookies: Cookies) {
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

export function getCredentialsCookies(cookies: Cookies): Credentials | undefined {
	const clientId = cookies.get('masto_client_id');
	const clientSecret = cookies.get('masto_client_secret');
	const serverURL = cookies.get('masto_server_url');
	if (clientId && clientSecret && serverURL) {
		return { clientId, clientSecret, serverURL };
	}
	return undefined;
}
