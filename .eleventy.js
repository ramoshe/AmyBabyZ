const social = require("./src/_includes/components/social");

module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("./src/css/");
	eleventyConfig.addWatchTarget("./src/css/");

	eleventyConfig.addPassthroughCopy("./src/assets/");
	eleventyConfig.addWatchTarget("./src/assets/");

	eleventyConfig.addShortcode("social", social);

	return {
		dir: {
			input: "src",
			output: "public",
		},
		templateFormats: ["md", "njk", "html"],
		markdownTemplateEngine: "njk",
		htmlTemplateEngine: "njk",
		dataTemplateEngine: "njk",
	};
};
