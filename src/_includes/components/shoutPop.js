const { html } = require('common-tags');

function shoutPop({title, id, link1, text1, link2, text2, logo, description}) {
    if (link2 == "") {
        return html`<div class="popup" id="${id}Pop">
			<div class="pop-close" onclick="popupClose()">
				<img src="../assets/close.svg" />
			</div>
			<div id="popcont">
				<div class="pop-logo">
					<img src="../assets/shoutLogos/${logo}" alt="${id} Logo" />
				</div>
				<div class="pop-content">
					<h1>${title}</h1>
					<p>${description}</p>
					<div class="pop-btns">
						<a href="${link1}" class="btn" target="_blank">${text1}</a>
					</div>
				</div>
			</div>
		</div>`;
    } else {
        return html`<div class="popup" id="${id}Pop">
			<div class="pop-close" onclick="popupClose()">
				<img src="../assets/close.svg" />
			</div>
			<div id="popcont">
				<div class="pop-logo">
					<img src="../assets/shoutLogos/${logo}" alt="${id} Logo" />
				</div>
				<div class="pop-content">
					<h1>${title}</h1>
					<p>${description}</p>
					<div class="pop-btns">
						<a href="${link1}" class="btn" target="_blank">${text1}</a>
						<a href="${link2}" class="btn" target="_blank">${text2}</a>
					</div>
				</div>
			</div>
		</div>`;
    }
}

module.exports = shoutPop;