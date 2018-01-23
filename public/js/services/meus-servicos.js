angular.module('meusServicos', ['ngResource'])
	.factory('recursoCupom', function($resource) {
		return $resource('/v1/cupoms/:cupomId', null, {
			'update' : { 
				method: 'PUT'
			}
		});
	})
    .factory('recursoEmpresa', function($resource) {
		return $resource('/v1/empresas/:empresaId', null, {
			'update' : { 
				method: 'PUT'
			}
		});
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
}).factory("cadastroDeEmpresas", function(recursoEmpresa, $q) {
		var service = {};
		service.cadastrar = function(empresa) {
			return $q(function(resolve, reject) {

				if(empresa._id) {
					recursoEmpresa.update({empresaId: empresa._id}, empresa, function() {
						resolve({
							mensagem: 'Projeto ' + empresa.razao + ' atualizado com sucesso',
							inclusao: false
						});
					}, function(erro) {
						console.log(erro);
						reject({
							mensagem: 'Não foi possível atualizar o projeto ' + empresa.razao
						});
					});

				} else {
					recursoEmpresa.save(empresa, function() {
						resolve({
							mensagem: 'Projeto ' + empresa.razao + ' incluída com sucesso',
							inclusao: true
						});
					}, function(erro) {
						alert('Não Resolveu');
						reject({
							mensagem: 'Não foi possível incluir o projeto ' + empresa.razao
						});
					});
				}
			});
		};
		return service;
})