const { html } = require('common-tags');

function shoutPop({title, id, link1, text1, link2, text2, logo, description}) {
    return html`<div class="popup" id="${id}Pop">
        <div class="pop-close"><img src="../assets/close.svg /></div>
		<div class="pop-logo"><img src="../assets/shoutLogos/${logo} /></div>
		<div class="pop-content">
			<h1>${title}</h1>
			<p>${description}</p>
			<div class="pop-btns">
				<a href="${link1}" class="btn">${text1}</a>
				<a href="${link2}" class="btn">${text2}</a>
			</div>
		</div>
	</div>`;
}

module.exports = shoutPop;