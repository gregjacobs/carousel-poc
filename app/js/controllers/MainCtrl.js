angular.module( 'CarouselPoc' ).controller( 'MainCtrl', function( $scope ) {
	
	$scope.index = 0;
	
	$scope.images = [
		{ url: 'img/329_wpm_lowres.jpg', thumbUrl: 'img/329_wpm_lowres.jpg', description: "Movin' on up" },
		{ url: 'img/380_wpm_lowres.jpg', thumbUrl: 'img/380_wpm_lowres.jpg', description: "Computing in the modern world" },
		{ url: 'img/6076_wpm_hires.jpg', thumbUrl: 'img/6076_wpm_hires.jpg', description: "Close up" },
		{ url: 'img/14724_wpm_lowres.jpg', thumbUrl: 'img/14724_wpm_lowres.jpg', description: "Energy" },
		{ url: 'img/1574_wpm_lowres.jpg', thumbUrl: 'img/1574_wpm_lowres.jpg', description: "Communicate" }
	];
	
} );