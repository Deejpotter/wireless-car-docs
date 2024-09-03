module.exports = function (eleventyConfig) {
  // Custom shortcode for the row element.
  eleventyConfig.addPairedShortcode("row", function (content) {
    return `<div class="row">${content}</div>`;
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
