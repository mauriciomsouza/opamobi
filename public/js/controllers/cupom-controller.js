angular.module('opa')
	.controller('cupomController', function($scope, recursoCupom, $routeParams, cadastroDeCupoms, $http) {
    
         $http.get('/usuario')
            .success(function(usuario) {
                $scope.usuario = usuario;
                $http.get('v1/empresas/'+usuario.cnpj)
                    .success(function(usuario) {
                        $scope.usuario = usuario;
                        console.log(usuario);
                    })
                    .error(function(erro) {
                        console.log(erro);
                });
            })
            .error(function(erro) {
                console.log(erro);
        });

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
				cadastroDeCupoms.cadastrar($scope.cupom)
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