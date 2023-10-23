import type { Credentials } from '../app';
import { APP_SERVER_LOGIN, SCOPES } from '../consts';

export function redirectToAuth(credentials: Credentials, server: string) {
	const authURL = new URL(`https://${server}/oauth/authorize`);
	authURL.searchParams.append('client_id', credentials.clientId);
	authURL.searchParams.append('redirect_uri', APP_SERVER_LOGIN);
	authURL.searchParams.append('response_type', 'code');
	authURL.searchParams.append('scope', SCOPES);
	return authURL;
}
