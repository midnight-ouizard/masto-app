export interface AppResponse {
	id: string;
	name: string;
	website?: string;
	redirect_uri: string;
	client_id: string;
	client_secret: string;
	vapid_key: string;
}

export interface Credentials {
	clientId: string;
	clientSecret: string;
	serverURL: string;
}
