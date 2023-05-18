export type Categories = 'sveltekit' | 'svelte';

export type Meta = {
	title: string;
	date: string;
	description?: string;
	image?: string;
	imageCredit?: string;
	imageCreditUrl?: string;
	tags?: string[];
	categories?: Categories[];
	hidden?: boolean;
	author?: string;
	rating?: number;
	bookUrl?: string;
};
export type Post = {
	slug: string;
	meta: Meta;
	content: any;
};
