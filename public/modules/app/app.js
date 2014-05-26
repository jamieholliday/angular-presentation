var presentationApp = angular.module('presentationApp', ['ui.router', 'hljs']);


presentationApp.config(function($stateProvider, $urlRouterProvider, hljsServiceProvider) {
	$urlRouterProvider.otherwise('slides/1');

	$stateProvider
		.state('slides', {
			url: '/slides/:id',
			templateUrl: 'partials/slides.html',
			controller: 'SlidesCtrl'
		});

	hljsServiceProvider.setOptions({
		tabReplace: '    '
	});
});