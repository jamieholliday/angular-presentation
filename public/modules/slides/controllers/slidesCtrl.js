'use strict';

presentationApp.controller('SlidesCtrl', function($scope, $state, $window) {
	var currentSlide = 1;
	$scope.page = $state.params.id;


	$scope.slides = [
		{
			template: 'partials/slide1.html',
			style: 'highlight',
			middle: true
		},
		{
			template: 'partials/slide2.html'
		},
		{
			template: 'partials/slide3.html',
			style: 'highlight',
			middle: true
		},
		{
			template: 'partials/slide4.html',	
		},
		{
			template: 'partials/slide5.html',
			middle: true
		},
		{
			template: 'partials/slide6.html'
		},
		{
			template: 'partials/slide7.html'
		},
		{
			template: 'partials/slide8.html'
		},
		{
			template: 'partials/slide9.html',
			style: 'highlight',
			middle: true
		},
		{
			template: 'partials/slide10.html',
			center: true
		},
		{
			template: 'partials/slide11.html',
			center: true
		},
		{
			template: 'partials/slide12.html'
		},
		{
			template: 'partials/slide13.html'
		},
		{
			template: 'partials/slide14.html'
		},
		{
			template: 'partials/slide15.html'
		},
		{
			template: 'partials/slide16.html'
		},
		{
			template: 'partials/slide17.html'
		},
		{
			template: 'partials/slide18.html'
		},
		{
			template: 'partials/slide19.html'
		},
		{
			template: 'partials/slide20.html',
			style: 'highlight',
			middle: 'true'
		},
		{
			template: 'partials/slide21.html'
		},
		{
			template: 'partials/slide22.html',
			style: 'highlight',
			middle: true
		}
	];

	
	//******* HACK! FIX *******//
	jQuery(function($) {
		$window = $(window);
		var calulateHeight = function() {
			var height = $(window).height();
			$('.allSlides').css('height', height + 'px')
		}

		$window.on('resize', function() {
			calulateHeight();
		});
		
		setTimeout(function() {
			calulateHeight();
		}, 100);
	});
});