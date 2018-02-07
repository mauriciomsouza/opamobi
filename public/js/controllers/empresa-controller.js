angular.module('opa').controller('EmpresaController', function($scope, recursoCupom, $http, $resource, $window, $sessionStorage, $localStorage, $location, recursoUsuario, atualizaDadosDaEmpresa, $filter) {
    
    $scope.cupoms = [];
	$scope.filtro = '';
	$scope.mensagem = '';
    $scope.usuario = {};

    $http.get('/usuario')
        .success(function(usuario) {
            $scope.usuario = usuario;
            $http.get('v1/usuarios/'+usuario.cnpj)
                .success(function(usuario) {
                    $scope.usuario = usuario;
                    recursoCupom.query(function(cupoms) {
                        if ($scope.usuario.plano == 'popular') {
                        $scope.permitidos = 4;
                        } else if ($scope.usuario.plano == 'amigo') {
                            $scope.permitidos = 7;
                        } else if ($scope.usuario.plano == 'rei') {
                            $scope.permitidos = 12;
                        };
                        $scope.cupoms = cupoms;
                        $scope.cupomsFiltrados = $filter('filter')(cupoms, {empresa_cnpj: $scope.usuario.cnpj});
                        $scope.ativos = $scope.cupomsFiltrados.length;
                        $scope.disponiveis = $scope.permitidos - $scope.ativos;
                    }, function(erro) {
                        console.log(erro);
                    });
                    
                
                
                
                })
                .error(function(erro) {
                    console.log(erro);
            });
        })
        .error(function(erro) {
			console.log(erro);
    });
    
    $scope.logout = function($scope){
        delete $window.sessionStorage.token; 
        $location.path('/login');
    };
    
    $scope.mudarSenha = function() {
			if ($scope.formulario.$valid) {        
                $http.patch('v1/usuarios/' + $scope.usuario.cnpj,
                         {'senha': $scope.novasenha}, {'senha': $scope.novasenha})
                    .success(function(status, headers) {
                    console.log('Sucesso')
                })
                .error(function(status) {
                    console.log('falhou');
                    console.log(status);
                })
            }
    };
    
    $scope.atualizarDados = function() {    
                $http.put('v1/usuarios/' + $scope.usuario.cnpj, {
                    'logradouro': $scope.usuario.logradouro,
                    'numero': $scope.usuario.numero,
                    'complemento' : $scope.usuario.complemento,
                    'bairro': $scope.usuario.bairro,
                    'cidade': $scope.usuario.cidade,
                    'estado': $scope.usuario.estado,
                    'cep': $scope.usuario.cep,
                    'telefone': $scope.usuario.telefone,
                    'email': $scope.usuario.email,
                    'plano': $scope.usuario.plano
                }, {
                    'logradouro': $scope.usuario.logradouro,
                    'numero': $scope.usuario.numero,
                    'complemento' : $scope.usuario.complemento,
                    'bairro': $scope.usuario.bairro,
                    'cidade': $scope.usuario.cidade,
                    'estado': $scope.usuario.estado,
                    'cep': $scope.usuario.cep,
                    'telefone': $scope.usuario.telefone,
                    'email': $scope.usuario.email,
                    'plano': $scope.usuario.plano
                })
                    .success(function(status, headers) {
                    console.log('Sucesso');
                })
                .error(function(status) {
                    console.log('falhou');
                    console.log(status);
                })
    };
        
    if ($scope.usuario.plano == 'popular') {
        $scope.permitidos = 4;
        console.log($scope.usuario.plano);
    } else if ($scope.usuario.plano == 'amigo') {
        $scope.permitidos = 7;
        console.log($scope.usuario.plano);
    } else if ($scope.usuario.plano == 'rei') {
        $scope.permitidos = 12;
        console.log($scope.usuario.plano);
    };
    
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