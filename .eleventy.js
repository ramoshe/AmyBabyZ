const shoutPop = require("./src/_includes/components/shoutPop");

module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("./src/css/");
	eleventyConfig.addWatchTarget("./src/css/");

	eleventyConfig.addPassthroughCopy("./src/assets/");
	eleventyConfig.addWatchTarget("./src/assets/");

	eleventyConfig.addPassthroughCopy("./src/js/");
	eleventyConfig.addWatchTarget("./src/js/");

	eleventyConfig.addShortcode("shoutPop", shoutPop);

	eleventyConfig.addPassthroughCopy({ "./src/favicon/": "/" });

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
