angular.module('opa', ['minhasDiretivas','ngAnimate', 'ngRoute', 'ngResource', 'meusServicos'])
	.config(function($routeProvider, $locationProvider, $httpProvider) {

		$httpProvider.interceptors.push('tokenInterceptor');
    
        $routeProvider.when('/home', {
			templateUrl: 'partials/home.html',
			controller: 'PrincipalController'
		});

		$routeProvider.when('/login', {
            templateUrl: 'partials/login.html',
            controller: 'LoginController'
        });

		$routeProvider.otherwise({redirectTo: '/home'});

	});