'use strict';

foAapp.controller('passCtrl', function ($scope, welcomeService) {
    $scope.msgtxt = '';
    $scope.setpass = function (pass) {
        console.log("login function in passCtrl fired");
        welcomeService.setpass(pass, $scope); //call setpass service in welcomeService
    }
});