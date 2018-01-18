const HCCrawler = require('headless-chrome-crawler');

HCCrawler.launch({
		// Function to be evaluated in browsers
		evaluatePage: (() => ({
			title: $('title').text(),
		})),
		// Function to be called with evaluated results from browsers
		onSuccess: (result => {
			console.log('toto', result);
		}),
	})
	.then(crawler => {
		// Queue a request
		// crawler.queue('http://localhost:8000/app/');

		crawler.queue({
			url: 'http://localhost:8000/app/',
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
