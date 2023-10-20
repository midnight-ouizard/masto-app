export function createServerURL(server: string): URL {
	if (server.startsWith('https://')) {
		return new URL(server);
	}

	return new URL(`https://${server}`);
}
