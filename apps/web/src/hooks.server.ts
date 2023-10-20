import { OATH_TOKEN_KEY } from '$lib/mastodon/auth/oath_code';
import { redirect, type Handle } from '@sveltejs/kit';

const AUTH_ROUTES = ['/'];

export const handle: Handle = async ({ event, resolve }) => {
	const oathToken = event.cookies.get(OATH_TOKEN_KEY);

	if (AUTH_ROUTES.includes(event.url.pathname) && !oathToken) {
		console.warn('trigger redirect a login', { url: event.url.pathname });
		throw redirect(301, '/login');
	}
	return await resolve(event);
};
