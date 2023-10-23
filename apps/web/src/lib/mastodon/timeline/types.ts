interface Field {
	name: string;
	value: string;
	verified_at: string;
}
interface Account {
	id: string;
	username: string;
	acct: string;
	url: string;
	display_name: string;
	note: string;
	avatar: string;
	avatar_static: string;
	header: string;
	header_static: string;
	locked: boolean;
	fields: Field[];
	emojis: CustomEmoji[];
	bot: boolean;
	group: boolean;
	discoverable: boolean | null;
	noindex?: boolean | null;
	moved?: Account | null;
	suspended?: boolean | null;
	limited?: boolean | null;
	created_at: string;
	last_status_at: string | null;
	statuses_count: number;
	followers_count: number;
	following_count: number;
}

interface MediaAttachment {
	id: string;
	type: 'unknown' | 'image' | 'gifv' | 'video' | 'audio';
	url: string;
	preview_url: string;
	remote_url: string | null;
	meta: unknown | MediaMetaVideo;
	decription: string;
	blurhash: string;
}

interface Application {
	name: string;
	website: string | null;
}

interface Tag {
	name: string;
	url: string;
}

interface CustomEmoji {
	shortcode: string;
	url: string;
	static_url: string;
	visible_in_picker: boolean;
	category: string;
}

interface Mention {
	id: string;
	username: string;
	url: string;
	acct: string;
}

interface MediaMetaVideo {
	length: string;
	duration: number;
	fps: number;
	size: string;
	width: number;
	height: number;
	aspect: number;
	audio_encode: string;
	audio_bitrate: string;
	audio_channels: string;
	original: {
		width: number;
		height: number;
		frame_rate: string;
		duration: number;
		bitrate: number;
	};
	small: {
		width: number;
		height: number;
		size: string;
		aspect: number;
	};
}

interface Poll {
	id: string;
	expires_at: string | null;
	expired: boolean;
	multiple: boolean;
	votes_count: number;
	voters_count: number | null;
	options: PollOption[];
	emojis: CustomEmoji[];
	voted?: boolean;
	own_botes?: number[];
}

interface PollOption {
	title: string;
	votes_count: number | null;
}

interface PreviewCard {
	url: string;
	title: string;
	description: string;
	type: 'link' | 'photo' | 'video' | 'rich';
	author_name: string;
	author_url: string;
	provider_name: string;
	provider_url: string;
	html: string;
	width: number;
	height: number;
	image: string | null;
	embed_url: string;
	blurhash: string;
}
export interface Status {
	id: string;
	uri: string;
	created_at: string;
	account: Account;
	content: string;
	visibility: 'public' | 'unlisted' | 'private' | 'direct';
	sensitive: boolean;
	spoiler_text: string;
	media_attachments: MediaAttachment[];
	application?: Application;
	mentions: Mention[];
	tags: Tag[];
	emojis: CustomEmoji[];
	reblogs_count: number;
	favourites_count: number;
	replies_count: number;
	url: string | null;
	in_reply_to_id: string | null;
	in_reply_to_account_id: string | null;
	reblog: Status | null;
	poll: Poll | null;
	card: PreviewCard | null;
	language: string | null;
	text: string | null;
	edited_at: string | null;
	favourited?: boolean;
	reblogged?: boolean;
	muted?: boolean;
	bookmarked?: boolean;
	pinned?: boolean;
	filtered?: boolean;
}
