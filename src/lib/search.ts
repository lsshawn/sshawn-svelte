import FlexSearch from 'flexsearch';

// Create a FlexSearch instance
const searchIndex = new FlexSearch();

// Function to build the search index
async function buildSearchIndex() {
	// Assuming your Markdown files are located in the 'content' directory
	const files = import.meta.glob('/src/posts/**/*.md');

	// Iterate through the Markdown files
	for (const path in files) {
		const file = await files[path]();
		const { metadata, content } = file;

		// Extract the necessary data for indexing
		const { title, description } = metadata;
		const text = content.replace(/[#`]/g, ''); // Remove Markdown syntax

		// Add the file to the search index
		searchIndex.add(path, text, {
			title,
			description,
		});
	}
}

// Function to perform a search
function search(query) {
	return searchIndex.search(query, 10); // Limit the results to 10
}

export { buildSearchIndex, search };
