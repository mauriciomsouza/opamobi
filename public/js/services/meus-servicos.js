angular.module('meusServicos', ['ngResource'])
    .factory('recursoEmpresa', function($resource) {
		return $resource('/v1/usuarios/:usuarioCNPJ', null, {
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
	})
	.factory("cadastroDeEmpresas", function(recursoEmpresa, $q) {
		var service = {};
		service.cadastrar = function(usuario) {
			return $q(function(resolve, reject) {
					recursoEmpresa.save(usuario, function() {
						resolve({
							mensagem: 'Projeto ' + usuario.razao + ' incluída com sucesso',
							inclusao: true
						});
					}, function(erro) {
						reject({
							mensagem: 'Não foi possível incluir o projeto ' + usuario.razao
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
							mensagem: 'cupom ' + cupom.titulo + ' atualizado com sucesso',
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
							mensagem: 'cupom ' + cupom.titulo + ' incluída com sucesso',
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