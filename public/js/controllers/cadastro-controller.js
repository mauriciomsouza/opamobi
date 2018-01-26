angular.module('opa')
	.controller('cadastroController', function($scope, recursoEmpresa, $routeParams, cadastroDeEmpresas) {
        
        $scope.pw1 = '';
		$scope.usuario = {};
		$scope.mensagem = '';

		if($routeParams.usuarioId) {
			recursoEmpresa.get({usuarioId: $routeParams.usuarioId}, function(usuario) {
				$scope.usuario = usuario; 
			}, function(erro) {
				console.log(erro);
				$scope.mensagem = 'Não foi possível obter a usuario'
			});
		}

		$scope.submeterEmpresa = function() {
			if ($scope.formulario.$valid) {
				cadastroDeEmpresas.cadastrar($scope.usuario)
				.then(function(dados) {
					$scope.mensagem = dados.mensagem;
					if (dados.inclusao) $scope.usuario = {};
				})
				.catch(function(erro) {
					$scope.mensagem = erro.mensagem;
				});
			}
		};
    
    
	});