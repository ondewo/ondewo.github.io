import * as ondewo from './data.js';

function setupPage() {
	for (let tech of ondewo.ondewo.technology) {
		const divTemp = `
            <div class="d-flex bg-primary text-white border border-primary flex-row justify-content-center rounded flex-nowrap p-1  m-3">
			<div class="d-flex p-1 bg-white rounded flex-column w-50">
				<alert style="cursor: pointer;" onclick="openLink('${tech.product_link}')" class="alert bg-secondary text-light w-75 font-weight-bold">ONDEWO ${tech.name}</alert>
				<p class="text-primary">Clients SDKs on Github for</p>
				<div class="d-flex flex-row flex-nowrap">
					<img
						class="tech-logo rounded-circle border border-primary p-2"
						onclick="openLink('${tech.clients.python}')"
						src="${ondewo.ondewo.logos.python_logo}"
						alt="Python Logo"
					/>
					<img class="tech-logo rounded-circle border border-primary" onclick="openLink('${tech.clients.angular}')" src="${ondewo.ondewo.logos.angular_logo}" alt="Angular Logo" />
					<img class="tech-logo rounded-circle border border-primary" onclick="openLink('${tech.clients.nodejs}')" src="${ondewo.ondewo.logos.nodejs_logo}" alt="Nodejs Logo" />
					<img class="tech-logo rounded-circle border border-primary" onclick="openLink('${tech.clients.typescript}')" src="${ondewo.ondewo.logos.typescript_logo}" alt="Typescript Logo" />
					<img class="tech-logo rounded-circle border border-primary" onclick="openLink('${tech.clients.js}')" src="${ondewo.ondewo.logos.js_logo}" alt="Javascript Logo" />
				</div>
			</div>
			<div class="d-flex flex-column w-50 m-1 ml-3">
				<p class="font-weight-bold">Version Documentation</p>
				<div id="${tech.name}-versions" class="d-flex flex-wrap w-100 bg-red">
				</div>
			</div>
		</div>
        `;
		document.getElementById('main-container').innerHTML += divTemp;
		for (let version of tech.versions) {
			const buttonsTemp = `
						<button onclick="openVersionLink('${version.link}')" class="btn btn-secondary m-1 p-1">${version.number}</button>
        `;
			document.getElementById(`${tech.name}-versions`).innerHTML += buttonsTemp;
		}
	}
}

window.openLink = (url) => {
	window.open(url);
};

window.openVersionLink = (url) => {
	// ondewo.github.io
	window.open(`http://localhost:8080/docs/${url}`);
};

setupPage();
