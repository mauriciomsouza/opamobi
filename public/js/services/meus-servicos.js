angular.module('meusServicos', ['ngResource'])
    .factory('recursoEmpresa', function($resource) {
		return $resource('/v1/cadastro/:usuarioCNPJ', null, {
			'save' : { 
				method: 'POST'
			}
		});
	})
    .factory('recursoCupom', function($resource) {
		return $resource('/v1/cupoms/:cupomId', null, {
			'update' : { 
				method: 'PUT'
			}
		});
	}).factory('acessoCupom', function($resource) {
		return $resource('/v1/lista/:cupomId', null, {
			'read' : { 
				method: 'GET'
			}
		});
	})
	.factory("cadastroDeEmpresas", function(recursoEmpresa, $q) {
		var service = {};
		service.cadastrar = function(usuario) {
			return $q(function(resolve, reject) {
					recursoEmpresa.save(usuario, function() {
						resolve({
							signupsuccess: 'CADASTRO REALIZADO COM SUCESSO. Retornando ao Login.',
							inclusao: true
						});
					}, function(erro) {
                        console.log(erro);
						reject({
							mensagem: 'NÃO FOI POSSÍVEL REALIZAR O CADASTRO.'
                            
						});
					});
			});
		};
		return service;
})
.factory("cadastroDeCupoms", function(recursoCupom, $q) {
		var service = {};
		service.cadastrar = function(cupom) {
			return $q(function(resolve, reject) {

				if(cupom._id) {
					recursoCupom.update({cupomId: cupom._id}, cupom, function() {
						resolve({
							mensagem: 'CUPOM ' + cupom.titulo + ' ATUALIZADO COM SUCESSO',
							inclusao: false
						});
					}, function(erro) {
						console.log(erro);
						reject({
							mensagem: 'Não foi possível atualizar o cupom ' + cupom.titulo
						});
					});

				} else {
					recursoCupom.save(cupom, function() {
						resolve({
							mensagem: 'CUPOM ' + cupom.titulo + ' INCLUÍDO COM SUCESSO',
							inclusao: true
						});
					}, function(erro) {
						alert('Não Resolveu');
						reject({
							mensagem: 'Não foi possível incluir o cupom ' + cupom.titulo
						});
					});
				}
			});
		};
		return service;
})