angular.module('opa').controller('PrincipalController', function($scope, acessoCupom, $routeParams, $http, $rootScope) {

    $scope.cupoms = [];
    $scope.cupom = {};
    $rootScope.newcupom = false;
    
    acessoCupom.query(function(cupoms) {
        var visitedCheck = localStorage.getItem("lista");
        if (visitedCheck == null) {
            $scope.cupoms = cupoms;
        } else {
            var listaLocal = localStorage.getItem("lista");
            
            var localParseada = JSON.parse(listaLocal);
            
            var listaServidor = JSON.stringify(cupoms);
            
            var servidorParseada = JSON.parse(listaServidor);

            function getIds(input, id) {
                var output = [];
                for (var i=0; i < input.length ; ++i)
                    output.push(input[i][id]);
                return output;
            };
            
            var listaIds = getIds(localParseada, "_id");
            
            for(var i=0; i < listaIds.length; i++) {
                for (var x = 0; x < servidorParseada.length; x++)
                if (servidorParseada[x]._id && servidorParseada[x]._id === listaIds[i]) { 
                    servidorParseada.splice(x, 1);
                    break;
                }
            }
            
            var listaAtualizada = localParseada.concat(servidorParseada);
            
            listaAtualizada = JSON.stringify(listaAtualizada, function( key, value ) {
                if( key === "$$hashKey" ) {
                    return undefined;
                }

                    return value;
            });
            
            listaAtualizada = JSON.parse(listaAtualizada);
            
            $scope.cupoms = listaAtualizada;
        }
        
	}, function(erro) {
		console.log(erro);
	});
    
    $scope.pegarCupom = function(cupom) {
        var cupomId = cupom._id;
        cupom.pego = cupom.pego + 1;
        
        var atualizalista = $scope.cupoms;
        
        for (var i = 0; i < atualizalista.length; i++) {
           if(cupomId === atualizalista[i]._id){  //look for match with name
               atualizalista[i].catchstatus = 'pego';
               break;  //exit loop since you found the person
           }
        }
        
        localStorage.setItem("lista", JSON.stringify(atualizalista)); //put the object back
        
        var listalocal = localStorage.getItem("lista");
        $scope.cupoms = JSON.parse(listalocal);
        
        $scope.data = cupom;
                      
        $http.put('v1/pega/' + cupom._id)
            .success(function(data) {
            })
            .error(function(data, status) {
            })
        
    }

   $scope.reverse = true;

   $scope.sortBy = function(propertyName) {
   $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : true;
   $scope.propertyName = propertyName;
  };
});



