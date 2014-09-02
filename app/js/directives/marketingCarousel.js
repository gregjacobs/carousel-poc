(function() {
	'use strict';
	
	angular.module( 'CarouselPoc' ).directive( 'marketingCarousel', factoryFn );
	
	
	function factoryFn() {
		return {
			restrict : 'E',
			templateUrl : 'views/directives/marketing-carousel.html',
			
			scope : {
				images : '=',
				index  : '=?'
			},
			
			controller : MarketingCarouselCtrl
		};
	}
	
	
	function MarketingCarouselCtrl( $scope ) {
		$scope.index = $scope.index || 0;
		
		$scope.updateIndex = function( idx ) {
			$scope.index = idx;
		}
	}

} )();