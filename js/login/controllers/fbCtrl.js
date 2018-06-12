'use strict';

foAapp.controller('fbCtrl', function ($scope, welcomeService) {
    $scope.msgtxt = '';
    $scope.fblogin = function (token) {
        console.log("fblogin function in fbCtrl fired");
        welcomeService.fblogin(token, $scope); //call login service in welcome
    }
});