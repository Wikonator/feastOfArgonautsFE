'use strict';

foAapp.controller('gameCtrl', ['$scope', 'welcomeService', 'littleService', function ($scope, welcomeService, littleService) {
    $scope.showStatisticVal = true;
    $scope.hideStatisticVal = false;
    $scope.showProfileVal = true;
    $scope.hideProfileVal = false;

    $scope.msgtxt = '';


    $scope.init = function () {
        console.log("runlittle function in littleService fired");
        $scope.showProfilePage = $scope.hideProfilePage = $scope.showStatisticPage = $scope.hideStatisticPage = false;
        littleService.runlittle(); //init runlittle service in welcomeService
    };
    $scope.logout=function () {
        welcomeService.logout();
    };
}]);