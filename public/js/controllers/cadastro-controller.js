angular.module('opa')
	.controller('cadastroController', function($scope, recursoEmpresa, cadastroDeEmpresas, $routeParams, $http, $location, $timeout) {
		$scope.usuario = {};
		$scope.mensagem = '';
        $scope.signupsuccess = '';
    
    var sucesso = function() {
        $timeout(function() {
            $scope.$apply(function() {
                $location.path("/login");
            });
        }, 3000);
    }
    
    $scope.submeter = function() {
            
			if ($scope.formulario.$valid) {        
            cadastroDeEmpresas.cadastrar($scope.usuario)
				.then(function(dados) {
					$scope.signupsuccess = dados.signupsuccess;
                    sucesso();
                   
				})
				.catch(function(erro) {
					$scope.mensagem = erro.mensagem;
				});
			} else {
                console.log('invalido');
            }
		};
	});