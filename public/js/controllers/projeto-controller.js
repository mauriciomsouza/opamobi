angular.module('opa')
	.controller('ProjetoController', function($scope, recursoProjeto, $routeParams, cadastroDeProjetos) {

		$scope.projeto = {};
		$scope.mensagem = '';

		if($routeParams.projetoId) {
			recursoProjeto.get({projetoId: $routeParams.projetoId}, function(projeto) {
				$scope.projeto = projeto; 
			}, function(erro) {
				console.log(erro);
				$scope.mensagem = 'Não foi possível obter o projeto'
			});
		}

		$scope.submeter = function() {
			if ($scope.formulario.$valid) {
				cadastroDeProjetos.cadastrar($scope.projeto)
				.then(function(dados) {
					$scope.mensagem = dados.mensagem;
					if (dados.inclusao) $scope.projeto = {};
				})
				.catch(function(erro) {
					$scope.mensagem = erro.mensagem;
				});
			}
		};
	});