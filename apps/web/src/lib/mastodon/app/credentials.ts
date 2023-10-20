import type { AppResponse, Credentials } from './types';

export function saveCredentials(credentials: AppResponse) {
	localStorage.setItem('masto_client_id', credentials.client_id);
	localStorage.setItem('masto_client_secret', credentials.client_secret);
}

export function getCredentials(): Credentials | undefined {
	const clientId = localStorage.getItem('masto_client_id');
	const clientSecret = localStorage.getItem('masto_client_secret');
	if (clientId && clientSecret) {
		return { clientId, clientSecret };
	}
	return undefined;
}
