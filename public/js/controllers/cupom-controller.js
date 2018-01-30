angular.module('opa')
	.controller('cupomController', function($scope, recursoCupom, $routeParams, cadastroDeCupoms, $http) {
         $scope.cupom = {};
         $scope.cupom.code = '';
         $scope.usuario = {};
    
         $http.get('/usuario')
            .success(function(usuario) {
                $scope.usuario = usuario;
                $http.get('v1/usuarios/'+usuario.cnpj)
                    .success(function(usuario) {
                        $scope.usuario = usuario;
                         $scope.cupom.endereco = $scope.usuario.logradouro + ', ' + $scope.usuario.numero + ' ' + $scope.usuario.complemento + ' ' + $scope.usuario.bairro + ' - ' + $scope.usuario.cidade + ' / ' + $scope.usuario.estado;
                        $scope.cupom.telefone = $scope.usuario.telefone;
                        $scope.cupom.razao = $scope.usuario.razao;
                        $scope.cupom.empresa_cnpj = $scope.usuario.cnpj;
                        var text = "";
                        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

                        for (var i = 0; i < 8; i++)
                        text += possible.charAt(Math.floor(Math.random() * possible.length));

                        $scope.cupom.code = text;
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