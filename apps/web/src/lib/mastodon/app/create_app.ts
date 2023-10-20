import { APP_SERVER_LOGIN, CLIENT_APP_NAME, SCOPES } from '../consts';
import { createServerURL } from '../server';
import type { AppResponse, Credentials } from './types';
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
export async function createMastodonAppOld(server: string): Promise<Credentials | undefined> {
	const input: CreateMastodonAppInput = {
		client_name: 'Mastodon',
		redirect_uris: APP_SERVER_LOGIN,
		scopes: SCOPES,
		website: ''
	};

	const serverURL = createServerURL(server);
	const createAppURL = new URL(serverURL.href + '/api/v1/apps');

	const response = await fetch(createAppURL, {
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

	return {
		clientId: body.client_id,
		clientSecret: body.client_secret,
		serverURL: serverURL.href
	};
}
