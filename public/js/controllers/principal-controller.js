angular.module('opa').controller('PrincipalController', function($scope, recursoCupom, $routeParams) {
	    
    recursoCupom.query(function(cupoms) {
		$scope.cupoms = cupoms;
	}, function(erro) {
		console.log(erro);
	});
    
    $scope.cupoms = [];
   
   $scope.reverse = true;

   $scope.sortBy = function(propertyName) {
   $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : true;
    $scope.propertyName = propertyName;
  };
});



