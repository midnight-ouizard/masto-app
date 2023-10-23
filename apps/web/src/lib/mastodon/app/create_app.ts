import { APP_SERVER_LOGIN, CLIENT_APP_NAME, SCOPES } from '../consts';
import { createServerURL } from '../server';
import type { Credentials } from './types';
import { createRestAPIClient } from 'masto';
export interface CreateMastodonAppInput {
	client_name: string;
	redirect_uris: string;
	scopes?: string;
	website?: string;
}

export async function createMastodonApp(server: string): Promise<Credentials | undefined> {
	const url = createServerURL(server).href;
	const masto = createRestAPIClient({
		url
	});

	const app = await masto.v1.apps.create({
		clientName: CLIENT_APP_NAME,
		redirectUris: APP_SERVER_LOGIN,
		scopes: SCOPES
	});

	if (!app || !app.clientId || !app.clientSecret) return;

	return {
		clientId: app.clientId,
		clientSecret: app.clientSecret,
		serverURL: url
	};
}
