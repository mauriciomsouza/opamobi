angular.module('opa').controller('EmpresaController', function($scope, recursoCupom, $http, $resource, $window, $sessionStorage, $localStorage, $location, recursoUsuario, atualizaDadosDaEmpresa) {
    
    $scope.usuario = {};
    var plano = $scope.usuario.plano;
    
    $http.get('/usuario')
        .success(function(usuario) {
            $scope.usuario = usuario;
            $http.get('v1/usuarios/'+usuario.cnpj)
                .success(function(usuario) {
                    $scope.usuario = usuario;
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
    
    if (plano == 'popular') {
         $scope.popular = 'ativo';
         $scope.amigo = 'inativo';
         $scope.rei = 'inativo';
    } else if (plano == 'amigo') {
         $scope.amigo = 'ativo';
         $scope.rei = 'inativo';
         $scope.popular = 'inativo';
    } else {
         $scope.rei = 'ativo';
         $scope.amigo = 'inativo';
         $scope.popular = 'inativo';
    }
  
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