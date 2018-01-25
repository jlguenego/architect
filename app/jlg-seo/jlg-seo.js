const app = angular.module('jlg-seo', []);

app.value('seoConfig', {
	titlePrefix: document.querySelector('title').innerHTML,
	metaDescription: document.querySelector('meta[name="description"]').getAttribute('content'),
});

app.run(($location, $transitions, seoConfig) => {
	$transitions.onSuccess({}, function(transition) {
		const data = transition.to().data;
		if (!data) {
			document.querySelector('title').innerHTML = seoConfig.titlePrefix;
			document.querySelector('meta[name="description"]').setAttribute('content', seoConfig.metaDescription);
			return;
		}

		document.querySelector('title').innerHTML = `${seoConfig.titlePrefix}: ${data.title}`;
		document.querySelector('meta[name="description"]').setAttribute('content', data.description);

		// seo open graph
		const url = document.querySelector('base').href;
		document.querySelector('meta[property="og:image:secure_url"]').setAttribute('content', url + data.image.main);
		document.querySelector('meta[property="og:title"]').setAttribute('content', data.title);
		document.querySelector('meta[property="og:description"]').setAttribute('content', data.description);
		document.querySelector('meta[property="og:url"]').setAttribute('content',
			url.substr(0, url.length - 1) + $location.path());

	});
});
