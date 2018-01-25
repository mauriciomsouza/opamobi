angular.module('opa').controller('LoginController', function($scope, $http, $location) {

    $scope.usuario = {};
    $scope.mensagem = '';

    $scope.autenticar = function() {

        var usuario = $scope.usuario;

        $http.post('/autenticar', {cnpj: usuario.cnpj, senha: usuario.senha})
        .then(function() {
            $location.path('empresa');
        }, function(erro) {
            $scope.usuario = {};
            $scope.mensagem = 'Login/Senha incorretos';
        });
    };
});