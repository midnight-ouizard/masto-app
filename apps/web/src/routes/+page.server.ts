import { createMastoClientFromCookies } from '$lib/mastodon/client/index.js';
import { error } from '@sveltejs/kit';

export const load = async ({ cookies }) => {
	const masto = createMastoClientFromCookies(cookies);

	const statuses = await masto.v1.timelines.home.list({ limit: 40 });

	if (!statuses) {
		throw error(500, 'Error buscando status');
	}

	return {
		statuses
	};
};
