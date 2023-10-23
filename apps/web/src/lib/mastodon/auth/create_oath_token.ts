import type { Credentials } from '../app';
import { APP_SERVER_LOGIN, SCOPES } from '../consts';

interface CreateOathTokenArgs {
	code: string;
	credentials: Credentials;
}

export async function createOathToken({
	code,
	credentials
}: CreateOathTokenArgs): Promise<string | undefined> {
	const { clientId, clientSecret, serverURL } = credentials;
	const formData = new FormData();
	formData.append('client_id', clientId);
	formData.append('client_secret', clientSecret);
	formData.append('grant_type', 'authorization_code');
	formData.append('redirect_uri', APP_SERVER_LOGIN);
	formData.append('code', code);
	formData.append('scope', SCOPES);

	try {
		const authURL = new URL(serverURL + '/oauth/token');
		const response = await fetch(authURL, {
			method: 'POST',
			body: formData
		});

		if (!response.ok || response.status !== 200) {
			throw new Error('Error buscando status');
		}

		const body = await response.json();

		return body.access_token as string;
	} catch (error) {
		console.error('Error buscando status', { error });
	}
}
