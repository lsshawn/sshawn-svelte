// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
	type PaginatedResponse = {
		data: any[];
		page: number;
		limit: number;
		total: number;
		remainingCount: number;
	};
}

export {};
