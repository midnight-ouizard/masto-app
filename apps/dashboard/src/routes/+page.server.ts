import { error, redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ request, cookies }) => {
		const formData = Object.fromEntries(await request.formData());

		if (!formData.email || !formData.password) {
			throw error(400, 'Missing email or password');
		}

		const { email } = formData as { email: string; password: string };

		cookies.set('AuthorizationToken', `Bearer ${email}`, {
			httpOnly: true,
			path: '/',
			secure: true,
			sameSite: 'strict',
			maxAge: 60 * 60 * 24 * 7 // 1 week
		});
		throw redirect(302, '/admin');
	}
};
