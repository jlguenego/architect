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
			const result = html.outerHTML;
			return {
				dom: result,
			};
		},
		// Function to be called with evaluated results from browsers
		onSuccess: (result => {
			let suffix = result.response.url.substring(url.length);
			suffix = (suffix === '') ? 'index.html' : suffix + '.html';
			
			const filename = path.resolve(__dirname, `../crawler-prerender/${suffix}`);
			mkdirp.sync(path.dirname(filename));
			
			console.log('writing to ', filename);
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
