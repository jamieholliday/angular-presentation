'use strict';

presentationApp.controller('SlidesCtrl', function($scope, $state, $window) {
	var currentSlide = 1;
	$scope.slides = [
		{
			template: 'partials/slide1.html'
		},
		{
			template: 'partials/slide2.html'
		}
	];
	$scope.page = $state.params.id;

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
		}, 0);
	});
});