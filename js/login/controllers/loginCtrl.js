'use strict';

foAapp.controller('loginCtrl', function ($scope, welcomeService) {
    $scope.msgtxt = '';
    $scope.login = function (user) {
        console.log("login function in loginCtrl fired");
        welcomeService.login(user, $scope); //call login service in welcomeService
    };
});