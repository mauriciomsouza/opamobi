angular.module('opa')
	.controller('cadastroController', function($scope, recursoEmpresa, cadastroDeEmpresas, $routeParams, $http, $location, $timeout, $uibModal) {
		$scope.usuario = {};
		$scope.mensagem = '';
        $scope.signupsuccess = '';
        $scope.popular = 'inativo';
        $scope.amigo = 'inativo';
        $scope.rei = 'inativo';
    
  
    $scope.planCheck = function(plano){ 
        if (plano == 'popular') {
            $scope.usuario.plano = plano;
            $scope.popular = 'ativo';
            $scope.amigo = 'inativo';
            $scope.rei = 'inativo';
        } else if (plano == 'amigo') {
            $scope.usuario.plano = plano;
            $scope.amigo = 'ativo';
            $scope.rei = 'inativo';
            $scope.popular = 'inativo';
        } else {
            $scope.usuario.plano = plano;
            $scope.rei = 'ativo';
            $scope.amigo = 'inativo';
            $scope.popular = 'inativo';
        }
    }
    
    var sucesso = function() {
        $timeout(function() {
            $scope.$apply(function() {
                $location.path("/login");
            });
        }, 3000);
    }
    
    $scope.usuario.situacao = 'irregular';
    
    $scope.showModal = function() {
        $uibModal.open({
                animation: true,
                templateUrl: 'terms.html',
                controller: 'ModalCtrl',
            });
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