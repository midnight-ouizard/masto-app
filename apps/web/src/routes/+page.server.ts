import { createMastoClientFromCookies } from '$lib/mastodon/client/index.js';
import { error, redirect } from '@sveltejs/kit';

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

export const actions = {
	signout: async ({ cookies }) => {
		for (const cookie of cookies.getAll()) {
			cookies.delete(cookie.name, { path: '/' });
		}

		throw redirect(303, '/login');
	}
};
