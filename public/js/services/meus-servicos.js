angular.module('meusServicos', ['ngResource'])
	.factory('recursoProjeto', function($resource) {

		return $resource('/v1/projetos/:projetoId', null, {
			'update' : { 
				method: 'PUT'
			}
		});
	}).factory('recursoCupom', function($resource) {

		return $resource('/v1/cupoms/:cupomId', null, {
			'update' : { 
				method: 'PUT'
			}
		});
	})
	.factory("cadastroDeProjetos", function(recursoProjeto, $q) {
		var service = {};
		service.cadastrar = function(projeto) {
			return $q(function(resolve, reject) {

				if(projeto._id) {
					recursoProjeto.update({projetoId: projeto._id}, projeto, function() {
						resolve({
							mensagem: 'Projeto ' + projeto.titulo + ' atualizado com sucesso',
							inclusao: false
						});
					}, function(erro) {
						console.log(erro);
						reject({
							mensagem: 'Não foi possível atualizar o projeto ' + projeto.titulo
						});
					});

				} else {
					recursoProjeto.save(projeto, function() {
						resolve({
							mensagem: 'Projeto ' + projeto.titulo + ' incluída com sucesso',
							inclusao: true
						});
					}, function(erro) {
						alert('Não Resolveu');
						reject({
							mensagem: 'Não foi possível incluir o projeto ' + projeto.titulo
						});
					});
				}
			});
		};
		return service;
    });