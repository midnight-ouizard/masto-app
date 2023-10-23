import type { Cookies } from '@sveltejs/kit';
import type { AuthCredentials } from '../types';
import { getCredentials } from '../app';
import { getOathToken } from './oath_code';

export function getAuthCredentials(cookies: Cookies): AuthCredentials | undefined {
	const credentials = getCredentials(cookies);
	const oathToken = getOathToken(cookies);

	if (!credentials?.serverURL || !oathToken) {
		return;
	}

	return {
		oathToken,
		url: credentials?.serverURL
	};
}
