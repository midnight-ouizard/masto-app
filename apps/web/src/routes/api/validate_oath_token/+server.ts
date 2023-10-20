import { saveOathCodeCookies } from '$lib/mastodon/auth/oath_code.js';
import { error, redirect } from '@sveltejs/kit';

export const GET = async ({ request, cookies }) => {
	const url = new URL(request.url);
	const code = url.searchParams.get('code');

	if (!code) {
		throw error(400, 'No code provided');
	}

	saveOathCodeCookies(code, cookies);
	console.log('redirect a /', { code });
	throw redirect(301, '/');
};
