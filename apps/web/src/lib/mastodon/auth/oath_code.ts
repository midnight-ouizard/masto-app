import type { Cookies } from '@sveltejs/kit';

export const OATH_TOKEN_KEY = 'oath_token' as const;

export function saveOathCodeCookies(code: string, cookies: Cookies) {
	cookies.set(OATH_TOKEN_KEY, code, {
		path: '/'
	});
}

export function getOathCodeCookies(cookies: Cookies): string | undefined {
	return cookies.get(OATH_TOKEN_KEY);
}
