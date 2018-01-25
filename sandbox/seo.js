const HCCrawler = require('headless-chrome-crawler');
const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

const cfgUtils = require('../cfg/utils.js');

const deployEnv = cfgUtils.getEnv('deploy');

console.log('base', deployEnv.base);

const url = 'http://localhost:8000/app/';

HCCrawler.launch({
		// Function to be evaluated in browsers
		evaluatePage: () => {
			const html = document.querySelector('html').cloneNode(true);

			html.querySelector('body').innerHTML = 'Hello crawler';
			html.querySelector('style').innerHTML = '';
			const links = html.querySelectorAll('link');
			for (let i = 0; i < links.length; i++) {
				links[i].parentNode.removeChild(links[i]);
			}
			const result = html.outerHTML;
			return {
				dom: result,
			};
		},
		// Function to be called with evaluated results from browsers
		onSuccess: (result => {
			const dom = result.result.dom;

			let suffix = result.response.url.substring(url.length);
			suffix = (suffix === '') ? 'index.html' : suffix + '.html';

			const filename = path.resolve(__dirname, `../app/crawler-prerender/${suffix}`);
			mkdirp.sync(path.dirname(filename));

			console.log('writing to ', filename);
			fs.writeFileSync(filename, dom);
		}),
	})
	.then(crawler => {
		// Queue a request
		// crawler.queue('http://localhost:8000/app/');

		crawler.queue({
			url: url,
			jQuery: false,
			allowedDomains: ['localhost'],
			maxDepth: 3,
			// Emulate a tablet device
			//   device: 'Nexus 7',
			// Enable screenshot by passing options
			// screenshot: {
			// 	path: 'example-com.png'
			// },
		});
		crawler.onIdle() // Resolved when no queue is left
			.then(() => crawler.close()); // Close the crawler
	});
