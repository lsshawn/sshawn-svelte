export type Categories = 'sveltekit' | 'svelte';

export type Meta = {
	title: string;
	date: string;
	summary?: string;
	image?: string;
	imageCredit?: string;
	imageCreditUrl?: string;
	tags?: string[];
	categories?: Categories[];
	isPrivate?: boolean; // completely unviewable in web
	unlisted?: boolean; // hidden from listing. Viewable directly.
	author?: string;
	rating?: number;
	bookUrl?: string;
};
export type Post = {
	slug: string;
	meta: Meta;
	content: any;
};
