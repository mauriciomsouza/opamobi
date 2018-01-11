angular.module('opa')
	.controller('PortfolioController', function($scope, recursoProjeto, $routeParams, cadastroDeProjetos) {

		$scope.projeto = {};

        $scope.projetos = [];
    
		if($routeParams.projetoId) {
			recursoProjeto.get({projetoId: $routeParams.projetoId}, function(projeto) {
				$scope.projeto = projeto; 
			}, function(erro) {
				console.log(erro);
				$scope.mensagem = 'Não foi possível obter o projeto'
			});
		}
    
        recursoProjeto.query(function(projetos) {
		$scope.projetos = projetos;
	}, function(erro) {
		console.log(erro);
	});

	});