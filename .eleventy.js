const { DateTime } = require('luxon');

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./src/assets/');
    eleventyConfig.addPassthroughCopy('./src/main.js');
    eleventyConfig.addPassthroughCopy('./src/style.css');

    eleventyConfig.addFilter('formatDate', (date) => {
        const formattedDate = DateTime.fromJSDate(date).toFormat('d MMM yyyy');
        return formattedDate;
    });

    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
            input: "src",
            output: "_site",
        }
    }
}