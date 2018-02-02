angular.module('opa').controller("ModalCtrl", function($scope, $uibModalInstance) {
    $scope.ok = function() {
        $uibModalInstance.close();
    };

    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };
});