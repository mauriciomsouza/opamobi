angular.module('opa')
	.controller('CategoriasController', function($scope, $http) {
		$http.get('/v1/categorias')
			.success(function(categorias) {
			$scope.categorias = categorias;
		})
		.error(function(erro) {
			console.log(erro);
		});
	});