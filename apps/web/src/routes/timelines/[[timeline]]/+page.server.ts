import { createMastoClientFromCookies } from '$lib/mastodon/client/index.js';
import { error } from '@sveltejs/kit';
import type { mastodon } from 'masto';

export const load = async ({ cookies, params }) => {
	const { timeline } = params;
	const masto = createMastoClientFromCookies(cookies);
	let statuses: mastodon.v1.Status[];

	switch (timeline) {
		case 'public':
			statuses = await masto.v1.timelines.public.list({ limit: 40 });
			break;

		default:
			statuses = await masto.v1.timelines.home.list({ limit: 40 });
			break;
	}

	if (!statuses) {
		throw error(500, 'Error buscando status');
	}

	return {
		statuses
	};
};
