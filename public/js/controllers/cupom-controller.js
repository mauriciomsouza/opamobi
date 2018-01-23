angular.module('opa')
	.controller('cupomController', function($scope, recursoCupom, $routeParams, cadastroDeCupoms) {
    
		$scope.cupom = {};
		$scope.mensagem = '';

		if($routeParams.cupomId) {
			recursoCupom.get({cupomId: $routeParams.cupomId}, function(cupom) {
				$scope.cupom = cupom; 
			}, function(erro) {
				console.log(erro);
				$scope.mensagem = 'Não foi possível obter o cupom'
			});
		}

		$scope.submeter = function() {
			if ($scope.formulario.$valid) {
				cadastroDeCupom.cadastrar($scope.cupom)
				.then(function(dados) {
					$scope.mensagem = dados.mensagem;
					if (dados.inclusao) $scope.cupom = {};
				})
				.catch(function(erro) {
					$scope.mensagem = erro.mensagem;
				});
			}
		};
	});