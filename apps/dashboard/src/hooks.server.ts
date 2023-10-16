import { redirect } from '@sveltejs/kit';

export async function handle({ event, resolve }) {
	const { pathname } = event.url;
	if (pathname.startsWith('/admin')) {
		const { cookies } = event;
		const token = cookies.get('AuthorizationToken');

		if (!token) {
			throw redirect(301, '/');
		}
	}

	return resolve(event);
}
