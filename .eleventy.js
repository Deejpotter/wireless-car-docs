const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Add a date filter (adjust the format as needed)
  eleventyConfig.addFilter("dateFilter", function (date) {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });


  // Set the formats for templates to use.
  eleventyConfig.setTemplateFormats([
    "md",
    "njk",
    "html",
    "liquid"
  ]);

  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["html", "njk", "md"],
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
