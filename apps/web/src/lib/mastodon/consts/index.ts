import { dev } from '$app/environment';

export const REDIRECT_URI = 'urn:ietf:wg:oauth:2.0:oob';
export const SCOPES = 'read write push';
export const APP_SERVER_LOGIN = dev ? 'http://localhost:5173/api/validate_oath_token' : 'TODO';
export const CLIENT_APP_NAME = 'TODO MASTODON CLIENT';
