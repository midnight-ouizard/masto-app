import { getCredentialsCookies } from '$lib/mastodon/app/credentials.js';
import { getOathCodeCookies } from '$lib/mastodon/auth/oath_code.js';
import { redirect } from '@sveltejs/kit';
import { createRestAPIClient } from 'masto';

export const load = async ({ cookies }) => {
	const oathToken = getOathCodeCookies(cookies);
	const credentials = getCredentialsCookies(cookies);

	if (!oathToken || !credentials?.serverURL) {
		console.log('redirect login desde /', { oathToken, credentials });
		throw redirect(303, '/login');
	}

	const masto = createRestAPIClient({
		accessToken: oathToken,
		url: credentials.serverURL
	});

	const status = await masto.v1.timelines.home.list({ limit: 40 });
	return { status };
};
