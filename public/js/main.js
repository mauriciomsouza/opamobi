angular.module('opa', ['minhasDiretivas','ngAnimate', 'ngRoute', 'ngResource', 'meusServicos', 'ui.bootstrap', 'ngMask', 'ngStorage', 'ngGeolocation', 'angular-filepicker'])
	.config(function($routeProvider, $locationProvider, $httpProvider, filepickerProvider) {
    
     $httpProvider.interceptors.push('tokenInterceptor');

        filepickerProvider.setKey('A0apDjnlJTqGoq1DbSkSIz');

        $routeProvider.when('/home', {
			templateUrl: 'partials/home.html',
			controller: 'PrincipalController'
		});
    
        $routeProvider.when('/cadastro', {
            templateUrl: 'partials/cadastro.html',
            controller: 'cadastroController'
        });
        
		$routeProvider.when('/login', {
            templateUrl: 'partials/login.html',
            controller: 'LoginController'
        });
        
        $routeProvider.when('/empresa', {
            templateUrl: 'partials/empresa.html',
            controller: 'EmpresaController'
        });

		$routeProvider.when('/cupoms/new', {
			templateUrl: 'partials/cupom.html',
			controller: 'cupomController'
		});

		$routeProvider.when('/cupoms/edit/:cupomId', {
			templateUrl: 'partials/cupom.html',
			controller: 'cupomController'
        });
        
        $routeProvider.otherwise({redirectTo: '/home'});

});