import { OATH_TOKEN_KEY } from '$lib/mastodon/auth/oath_code';
import { redirect, type Handle } from '@sveltejs/kit';

const AUTH_ROUTES = ['/timelines'];

export const handle: Handle = async ({ event, resolve }) => {
	const oathToken = event.cookies.get(OATH_TOKEN_KEY);

	if (event.url.pathname === '/login' && oathToken) {
		console.warn('trigger redirect a home', { url: event.url.pathname });
		throw redirect(301, '/timelines/home');
	} else if (event.url.pathname === '/' && oathToken) {
		console.warn('trigger redirect a home', { url: event.url.pathname });
		throw redirect(301, '/timelines/home');
	} else if (AUTH_ROUTES.includes(event.url.pathname) && !oathToken) {
		console.log('trigger redirect a login', { url: event.url.pathname });
		throw redirect(301, '/login');
	}

	return await resolve(event);
};
