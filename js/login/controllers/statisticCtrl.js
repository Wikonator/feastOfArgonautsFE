'use strict';

foAapp.controller('statisticCtrl', function ($scope, welcomeService) {
    let logs = [];
    $scope.logs = logs;
    $scope.loadLogs = function () {
        console.log("loadLogs function in statisticCtrl fired");
        welcomeService.getULogs($scope);
    };
    $scope.logout = function () {
        welcomeService.logout();
    };
});