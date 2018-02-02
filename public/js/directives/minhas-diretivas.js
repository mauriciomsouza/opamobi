angular.module('minhasDiretivas', [])
	.directive('meuCupom', function() {

		var ddo = {};

		ddo.restrict = "AE";
        ddo.transclude = true;
		ddo.scope = true;

        ddo.templateUrl = 'js/directives/meu-cupom.html';

		return ddo;
	}).directive('minhaLista', function() {

		var ddo = {};

		ddo.restrict = "AE";
        ddo.transclude = true;
		ddo.scope = true;

        ddo.templateUrl = 'js/directives/minha-lista.html';

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
    }).directive('meuRodape', function() {

		var ddo = {};

		ddo.restrict = "AE";
        ddo.transclude = true;


		ddo.scope = {
            titulo: '@'
        };

        ddo.templateUrl = 'js/directives/meu-rodape.html';

		return ddo;
    }).directive('tooltip', function(){
    return {
        restrict: 'A',
        link: function(scope, element, attrs){
            $(element).hover(function(){
                // on mouseenter
                $(element).tooltip('show');
            }, function(){
                // on mouseleave
                $(element).tooltip('hide');
            });
            $(element).click(function(){
                // on mouseenter
                $(element).tooltip('hide');
            }, function(){
                // on mouseleave
                $(element).tooltip('hide');
            });
        }
    };
});