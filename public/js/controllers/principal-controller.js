angular.module('opa').controller('PrincipalController', function($scope, recursoProjeto, $routeParams) {
	
  	recursoProjeto.query(function(projetos) {
		$scope.projetos = projetos;
	}, function(erro) {
		console.log(erro);
	});
    
    $scope.projetos = [];
    
});



