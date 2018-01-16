angular.module('minhasDiretivas', [])
	.directive('meuCupom', function() {

		var ddo = {};

		ddo.restrict = "AE";
        ddo.transclude = true;
		ddo.scope = true;

        ddo.templateUrl = 'js/directives/meu-cupom.html';

		return ddo;
	})
    .directive('meuMenu', function() {

		var ddo = {};

		ddo.restrict = "AE";
        ddo.transclude = true;


		ddo.scope = {
            titulo: '@'
        };

        ddo.templateUrl = 'js/directives/meu-menu.html';

		return ddo;
    });