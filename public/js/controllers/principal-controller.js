angular.module('opa').controller('PrincipalController', function($scope, recursoProjeto, recursoCupom, $routeParams) {
	
  	recursoProjeto.query(function(projetos) {
		$scope.projetos = projetos;
	}, function(erro) {
		console.log(erro);
	});
    
    $scope.projetos = [];
    
    recursoCupom.query(function(cupoms) {
		$scope.cupoms = cupoms;
	}, function(erro) {
		console.log(erro);
	});
    
    $scope.cupoms = [];
   
   
});



