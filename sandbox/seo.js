const HCCrawler = require('headless-chrome-crawler');
const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');



const url = 'http://localhost:8000/app/';

HCCrawler.launch({
		// Function to be evaluated in browsers
		evaluatePage: () => {
			const html = document.querySelector('html').cloneNode(true);
			

			html.querySelector('body').innerHTML = 'Hello crawler'; 
			html.querySelector('style').innerHTML = ''; 
			// document.querySelector('script').innerHTML = '';
			return {
				dom: html.outerHTML,
			};
		},
		// Function to be called with evaluated results from browsers
		onSuccess: (result => {
			console.log('toto', result);
			let suffix = result.response.url.substring(url.length);
			console.log('suffix', suffix);
			suffix = (suffix === '') ? 'index.html' : suffix + '.html';

			const filename = path.resolve(__dirname, `../crawler-prerender/${suffix}`);
			console.log('filename', filename);



			mkdirp.sync(path.dirname(filename));

			fs.writeFileSync(filename, result.result.dom);
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
