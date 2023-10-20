import type { Credentials } from '../app';
import { REDIRECT_URI } from '../consts';

const createSearchParams = (credentials: Credentials): URLSearchParams => {
	const searchParams = new URLSearchParams();
	searchParams.append('client_id', credentials.clientId);
	searchParams.append('response_type', 'code');
	searchParams.append('redirect_uri', REDIRECT_URI);
	searchParams.append('scope', 'read write follow');
	return searchParams;
};

export async function getUserAuthToken(credentials: Credentials, server: string) {
	const serverURL = new URL(`https://${server}/oauth/authorize`);
	serverURL.search = createSearchParams(credentials).toString();

	try {
		const resp = await fetch(serverURL);
		console.log({ resp });
	} catch (error) {
		console.error('Error getting authToken', { error, serverURL });
	}
}
