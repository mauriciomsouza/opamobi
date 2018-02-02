angular.module('opa')
	.controller('categoryIconController', function($scope) {
        $scope.categoria = '';
        $scope.icon = '';
        if ($scope.cupom.categoria == 'alimentacao') {
            $scope.icon = 'cutlery';
            $scope.categoria = 'ALIMENTAÇÃO';
        } 
        if ($scope.cupom.categoria == 'viagem') {
            $scope.icon = 'plane';
            $scope.categoria = 'VIAGEM';
        } 
        if ($scope.cupom.categoria == 'saude') {
            $scope.icon = 'heartbeat';
            $scope.categoria = 'SAÚDE';
        } 
        if ($scope.cupom.categoria == 'entretenimento') {
            $scope.icon = 'ticket';
            $scope.categoria = 'ENTRETENIMENTO';
        } 
        if ($scope.cupom.categoria == 'artes') {
            $scope.icon = 'paint-brush';
            $scope.categoria = 'ARTES';
        }   
        if ($scope.cupom.categoria == 'passeio') {
            $scope.icon = 'tree';
            $scope.categoria = 'PASSEIO';
        } 
        if ($scope.cupom.categoria == 'cinema') {
            $scope.icon = 'film';
            $scope.categoria = 'CINEMA';
        } 
        if ($scope.cupom.categoria == 'bares') {
            $scope.icon = 'glass';
            $scope.categoria = 'BARES';
        } 
        if ($scope.cupom.categoria == 'financeiro') {
            $scope.icon = 'money';
            $scope.categoria = 'FINANCEIRO';
        } 
        if ($scope.cupom.categoria == 'esportes') {
            $scope.icon = 'futbol-o';
            $scope.categoria = 'ESPORTES';
        } 
        if ($scope.cupom.categoria == 'mercado') {
            $scope.icon = 'shopping-basket';
            $scope.categoria = 'MERCADO';
        }
        if ($scope.cupom.categoria == 'estacionamento') {
            $scope.icon = 'car';
            $scope.categoria = 'ESTACIONAMENTO';
        }
        if ($scope.cupom.categoria == 'pet') {
            $scope.icon = 'paw';
            $scope.categoria = 'PET';
        }
	});