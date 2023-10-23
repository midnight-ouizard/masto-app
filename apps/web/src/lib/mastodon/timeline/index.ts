import type { AuthCredentials } from '../types';
import type { Status } from './types';

interface ListTimelineArgs {
	credentials: AuthCredentials;
	timeline: 'public' | 'home';
}

export async function getPublicTimeline({
	timeline,
	credentials
}: ListTimelineArgs): Promise<Status[] | undefined> {
	const { oathToken, url } = credentials;
	try {
		const resp = await fetch(`${url}/api/v1/timelines/${timeline}`, {
			headers: {
				Authorization: `Bearer ${oathToken}`
			}
		});

		if (!resp.ok || resp.status !== 200) {
			throw new Error('Error buscando status');
		}

		return await resp.json();
	} catch (error) {
		console.error('Error buscando status', { error });
	}
}
