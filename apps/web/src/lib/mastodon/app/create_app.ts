import { REDIRECT_URI, SCOPES } from '../consts';
import { saveCredentials } from './credentials';
import type { AppResponse, Credentials } from './types';

export interface CreateMastodonAppInput {
	client_name: string;
	redirect_uris: string;
	scopes?: string;
	website?: string;
}

export async function createMastodonApp(server: string): Promise<Credentials | undefined> {
	const input: CreateMastodonAppInput = {
		client_name: 'Mastodon',
		redirect_uris: REDIRECT_URI,
		scopes: SCOPES,
		website: ''
	};

	const serverURl = new URL(`https://${server}/api/v1/apps`);

	const response = await fetch(serverURl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(input)
	});

	if (!response.ok || response.status !== 200) {
		return;
	}

	const body: AppResponse = await response.json();

	// Save 'em in localStorage
	saveCredentials(body);

	return {
		clientId: body.client_id,
		clientSecret: body.client_secret
	};
}
