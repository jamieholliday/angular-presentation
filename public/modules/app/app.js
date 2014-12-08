var presentationApp = angular.module('presentationApp', ['ui.router', 'hljs']);


presentationApp.config(function($stateProvider, $urlRouterProvider, hljsServiceProvider) {
	$urlRouterProvider.otherwise('slides/');

	$stateProvider
		.state('slides', {
			url: '/slides/',
			templateUrl: 'partials/slides.html',
			controller: 'SlidesCtrl'
		});

	hljsServiceProvider.setOptions({
		tabReplace: '    '
	});
});