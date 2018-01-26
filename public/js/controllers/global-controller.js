angular.module('opa').controller('GlobalCtrl', function($scope, $location, $route) {
    $scope.$on('$locationChangeStart', function(event, next, current) {
        var location = $location.path().substr(1)
        $scope.bodyClass = location + '-page';
    });
});