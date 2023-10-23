import { getCredentials } from '$lib/mastodon/app/credentials.js';
import { createOathToken } from '$lib/mastodon/auth/create_oath_token.js';
import { saveOathToken } from '$lib/mastodon/auth/oath_code.js';
import { error, redirect } from '@sveltejs/kit';

export const GET = async ({ request, cookies }) => {
	const url = new URL(request.url);
	const code = url.searchParams.get('code');
	const credentials = getCredentials(cookies);

	if (!code || !credentials) {
		throw error(400, 'No code provided');
	}

	const oathToken = await createOathToken({ code, credentials });

	if (!oathToken) {
		throw error(500, 'No oath token provided');
	}

	saveOathToken(oathToken, cookies);
	throw redirect(301, '/timelines/home');
};
