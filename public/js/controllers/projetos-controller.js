angular.module('opa').controller('ProjetosController', function($scope, recursoProjeto) {
	
	$scope.projetos = [];
	$scope.filtro = '';
	$scope.mensagem = '';

	recursoProjeto.query(function(projetos) {
		$scope.projetos = projetos;
	}, function(erro) {
		console.log(erro);
	});

	$scope.remover = function(projeto) {

		recursoProjeto.delete({projetoId: projeto._id}, function() {
			var indiceDoProjeto = $scope.projetos.indexOf(projeto);
			$scope.projetos.splice(indiceDoProjeto, 1);
			$scope.mensagem = 'Projeto ' + projeto.titulo + ' removido com sucesso!';
		}, function(erro) {
			console.log(erro);
			$scope.mensagem = 'Não foi possível apagar o projeto ' + projeto.titulo;
		});
	};

});