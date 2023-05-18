import { error } from '@sveltejs/kit';

export async function load({}) {
	try {
		const page = await import('../../pages/about.md');

		return {
			content: page.default,
			meta: page.metadata,
		};
	} catch (e) {
		throw error(404, `Could not find about.md`);
	}
}
