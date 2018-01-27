angular.module('opa')
	.controller('cadastroController', function($scope, recursoEmpresa, cadastroDeEmpresas, $routeParams, $http, $location) {
		$scope.usuario = {};
		$scope.mensagem = '';

    
    $scope.submeter = function() {
            
			if ($scope.formulario.$valid) {        
            cadastroDeEmpresas.cadastrar($scope.usuario)
				.then(function(dados) {
					$scope.mensagem = dados.mensagem;
                    $location.url('#/login')
				})
				.catch(function(erro) {
					$scope.mensagem = erro.mensagem;
				});
			} else {
                console.log('invalido');
            }
		};
	});