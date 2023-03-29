const { html } = require('common-tags');

function social({link, site}) {
    return html`<a href="${link}"><img src="socialicons/${site}.svg" /></a>`;
}

module.exports = social;