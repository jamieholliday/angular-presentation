'use strict';

presentationApp.directive('jhSlidedeck', function($state, $window) {
	return {
		restrict: 'EA',
		replace: true,
		scope: {
			slides: '=',
			page: '=',
			showControlls: "@"
		},
		link: function(scope, elem, attrs) {
			scope.currentIndex = scope.page || 1;

			scope.next = function() {
				if(scope.currentIndex < scope.slides.length) {
					scope.currentIndex++;
					$window.location.href = '#/slides/'+ scope.currentIndex;
				}
			};

			scope.prev = function() {
				if(scope.currentIndex > 1) {
					scope.currentIndex--;
					$window.location.href = '#/slides/'+ scope.currentIndex;
				}
			};

			scope.$watch('currentIndex', function() {
				scope.slides.forEach(function (slide) {
					slide.visible = false;
				});
				scope.slides[scope.currentIndex - 1].visible = true;
			});
		},
		templateUrl: 'partials/slideContainer.html'
	};
});