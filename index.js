import * as ondewo from './data.js';

const clientLabels = {
	python: 'Python',
	angular: 'Angular',
	nodejs: 'Nodejs',
	typescript: 'Typescript',
	js: 'Javascript',
	php: 'PHP',
	go: 'Go',
	rust: 'Rust',
	cpp: 'C++',
	java: 'Java',
	csharp: 'C#',
};

function renderClientLogos(tech) {
	return Object.entries(tech.clients)
		.map(
			([client, repoLink]) =>
				`<img class="tech-logo img img-responsive rounded-circle border border-primary" style="padding: 1%;" onclick="openLink('${repoLink}','')" src="${ondewo.ondewo.logos[`${client}_logo`]}" alt="ONDEWO ${tech.name} ${clientLabels[client] || client} client SDK on GitHub" />`
		)
		.join('\n\t\t\t\t\t\t');
}

function setupPage() {
	for (let tech of ondewo.ondewo.technology) {
		const divTemp = `
            <div class="d-flex bg-primary text-white border border-primary flex-row justify-content-center rounded flex-nowrap p-1  m-3">
			<div class="d-flex p-1 bg-white rounded flex-column w-50">
				<button style="cursor: pointer;" onclick="openLink('${tech.product_link}','')" class="alert bg-secondary text-light font-weight-bold">ONDEWO ${tech.name}</button>
				<p class="text-primary">Clients SDKs on GitHub for</p>
				<div class="container d-flex flex-row flex-wrap">
						${renderClientLogos(tech)}
				</div>
			</div>
			<div class="d-flex flex-column w-50 m-1 ml-3">
				<p class="font-weight-bold">Version Documentation</p>
				<div id="${tech.name}-versions" class="d-flex flex-wrap w-100">
					<button onclick="openLink('https://ondewo.github.io/ondewo-${tech.name.toLocaleLowerCase()}-api/','_self')" class="btn btn-secondary m-1 p-1">Current</button>
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

window.openLink = (url, source) => {
	window.open(url, source);
};

window.openVersionLink = (url) => {
	window.open(`https://ondewo.github.io/docs/${url}`, '_self');
};

setupPage();
