angular.module('opa')
	.controller('cadastroController', function($scope, recursoEmpresa, $routeParams, cadastroDeEmpresas) {

		$scope.empresa = {};
		$scope.mensagem = '';

		if($routeParams.empresaId) {
			recursoEmpresa.get({empresaId: $routeParams.empresaId}, function(empresa) {
				$scope.empresa = empresa; 
			}, function(erro) {
				console.log(erro);
				$scope.mensagem = 'Não foi possível obter a empresa'
			});
		}

		$scope.submeterEmpresa = function() {
			if ($scope.formulario.$valid) {
				cadastroDeEmpresas.cadastrar($scope.empresa)
				.then(function(dados) {
					$scope.mensagem = dados.mensagem;
					if (dados.inclusao) $scope.empresa = {};
				})
				.catch(function(erro) {
					$scope.mensagem = erro.mensagem;
				});
			}
		};
	});