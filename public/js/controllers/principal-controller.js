angular.module('opa').controller('PrincipalController', function($scope, recursoProjeto, $routeParams) {
	
  	recursoProjeto.query(function(projetos) {
		$scope.projetos = projetos;
	}, function(erro) {
		console.log(erro);
	});
    
    $scope.projetos = [];
    
   $scope.filtroRange = filtroRange; 
    
    function filtroRange() {
        if (this.rangemodel == 1) {
            $scope.categoryFilter = function(projeto) {
            if (projeto.categoria === 'identidade visual' || projeto.categoria === 'material comercial' || projeto.categoria === 'vídeo promocional' || projeto.categoria === 'site institucional' || projeto.categoria === 'design de interface') {
                return projeto;      
                }
            };
        } else if (this.rangemodel == 2) {
            $scope.categoryFilter = function(projeto) {
            if (projeto.categoria === 'design de interface' || projeto.categoria === 'sinalização' || projeto.categoria === 'cardápio') {
                return projeto;      
                }
            };
        } else if (this.rangemodel == 3) {
            $scope.categoryFilter = function(projeto) {
            if (projeto.categoria === 'banner' || projeto.categoria === 'poster' || projeto.categoria === 'letreiro' || projeto.categoria === 'comercial' || projeto.categoria === 'identidade visual') {
                return projeto;      
                }
            };
        } else if (this.rangemodel == 4) {
            $scope.categoryFilter = function(projeto) {
            if (projeto.categoria === 'site institucional' || projeto.categoria === 'material comercial' || projeto.categoria === 'vídeo promocional'|| projeto.categoria === 'identidade visual'|| projeto.categoria === 'naming'|| projeto.categoria === 'pitch deck') {
                return projeto;      
                }
            };
        } else if (this.rangemodel == 5) {
            $scope.categoryFilter = function(projeto) {
            if (projeto.categoria === 'ecommerce' || projeto.categoria === 'material comercial' || projeto.categoria === 'cardápio') {
                return projeto;        
                }
            };
        } else if (this.rangemodel == 6) {
            $scope.categoryFilter = function(projeto) {
            if (projeto.categoria === 'material comercial' || projeto.categoria === 'email marketing') {
                return projeto;      
                }
            };
        } else if (this.rangemodel == 7) {
            $scope.categoryFilter = function(projeto) {
            if (projeto.categoria === 'design editorial') {
                return projeto;      
                }
            };
        }
     };
});



