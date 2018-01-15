const app = angular.module('jlg-seo', []);

app.value('seoConfig', {
	titlePrefix: document.querySelector('title').innerHTML,
	metaDescription: document.querySelector('meta[name="description"]').getAttribute('content'),
});

app.run(($transitions, seoConfig) => {
	$transitions.onSuccess({}, function(transition) {
		const data = transition.to().data;
		console.log('data', data);
		console.log('seoConfig', seoConfig);
		if (!data) {
			document.querySelector('title').innerHTML = seoConfig.titlePrefix;
			document.querySelector('meta[name="description"]').setAttribute('content', seoConfig.metaDescription);
			return;
		}

		document.querySelector('title').innerHTML = `${seoConfig.titlePrefix}: ${data.title}`;
		document.querySelector('meta[name="description"]').setAttribute('content', data.description);
		
	});
});
