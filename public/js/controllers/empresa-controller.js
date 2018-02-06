angular.module('opa').controller('EmpresaController', function($scope, recursoCupom, $http, $resource, $window, $sessionStorage, $localStorage, $location, recursoUsuario, atualizaDadosDaEmpresa) {
    
    $scope.usuario = {};
    
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
                $http.put('v1/usuarios/' + $scope.usuario.cnpj,
                         {'senha': $scope.novasenha}, {'senha': $scope.novasenha})
                    .success(function(status, headers) {
                    $scope.autorizado = 'Senha modificada com sucesso.';
                })
                .error(function(status) {
                    console.log('falhou');
                    console.log(status);
                })
            }
    };
    
    var plano = $scope.usuario.plano;
    
    console.log(plano);
    
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
    
    
    $scope.atualizarDados = function() {
			 atualizaDadosDaEmpresa.atualizar($scope.usuario)
				.then(function(dados) {
					$scope.sucesso = dados.sucesso;
					if (dados.inclusao) $scope.usuario = {};
				})
				.catch(function(erro) {
					$scope.mensagem = erro.mensagem;
				});
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