angular.module('opa').controller('EmpresaController', function($scope, recursoCupom, $http, $resource) {
    
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
    
    $scope.cupoms = [];
	$scope.filtro = '';
	$scope.mensagem = '';

	recursoCupom.query(function(cupoms) {
		$scope.cupoms = cupoms;
	}, function(erro) {
		console.log(erro);
	});
    
	$scope.remover = function(cupom) {
		recursoCupom.delete({cupomId: cupom._id}, function() {
			var indiceDoCupom = $scope.cupoms.indexOf(cupom);
			$scope.cupoms.splice(indiceDoCupom, 1);
			$scope.mensagem = 'Cupom ' + cupom.titulo + ' removido com sucesso!';
		}, function(erro) {
			console.log(erro);
			$scope.mensagem = 'Não foi possível apagar o cupom ' + cupom.titulo;
		});
	};

});