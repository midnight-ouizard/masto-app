import type { Credentials } from '../app';
import { REDIRECT_URI, SCOPES } from '../consts';

interface CreateTokenResponse {
	access_token: string;
	token_type: string;
	scope: string;
	created_at: number;
}

const createFormBodyTokenRequest = (credentials: Credentials): FormData => {
	const requestBody = new FormData();
	requestBody.append('grant_type', 'client_credentials');
	requestBody.append('client_id', credentials.clientId);
	requestBody.append('client_secret', credentials.clientSecret);
	requestBody.append('redirect_uri', REDIRECT_URI);
	requestBody.append('scope', SCOPES);

	return requestBody;
};

export async function createAuthToken(credentials: Credentials, server: string) {
	const requestBody = createFormBodyTokenRequest(credentials);

	const apiURL = new URL(`https://${server}/oauth/token`);

	try {
		const resp = await fetch(apiURL, { method: 'POST', body: requestBody });

		if (!resp.ok || resp.status !== 200) {
			console.error('Error creating auth token', { resp, apiURL });
			return;
		}

		const body: CreateTokenResponse = await resp.json();

		console.log({ body });
	} catch (error) {
		console.error('Error creating auth token', { error, apiURL });
	}
}
