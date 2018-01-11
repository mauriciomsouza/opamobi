angular.module('opa', ['minhasDiretivas','ngAnimate', 'ngRoute', 'ngResource', 'meusServicos'])
	.config(function($routeProvider, $locationProvider, $httpProvider) {

		$httpProvider.interceptors.push('tokenInterceptor');
    
        $routeProvider.when('/home', {
			templateUrl: 'partials/home.html',
			controller: 'PrincipalController'
		});
    
        $routeProvider.when('/portfolio/:projetoId', {
			templateUrl: 'partials/ficha.html',
			controller: 'PortfolioController'
		});
    
		$routeProvider.when('/projetos', {
			templateUrl: 'partials/projetos.html',
			controller: 'ProjetosController'
		});

		$routeProvider.when('/projetos/new', {
			templateUrl: 'partials/projeto.html',
			controller: 'ProjetoController'
		});

		$routeProvider.when('/projetos/edit/:projetoId', {
			templateUrl: 'partials/projeto.html',
			controller: 'ProjetoController'
		});

		$routeProvider.when('/login', {
            templateUrl: 'partials/login.html',
            controller: 'LoginController'
        });

		$routeProvider.otherwise({redirectTo: '/home'});

	});