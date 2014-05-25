var presentationApp = angular.module('presentationApp', ['ui.router']);


presentationApp.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('slides/1');

	$stateProvider
		.state('slides', {
			url: '/slides/:id',
			templateUrl: 'partials/slides.html',
			controller: 'SlidesCtrl'
		});
});