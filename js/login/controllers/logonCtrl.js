'use strict';

foAapp.controller('logonCtrl', function ($scope, welcomeService) {
    $scope.msgtxt = '';

    $scope.logon = function (mail) {
        console.log("login function in forgotCtrl fired");
        welcomeService.logon(mail, $scope); //call logon service in welcomeService
    };
    $scope.go2About = function () {
        console.log("go2About function in aboutCtrl fired");
        welcomeService.goabout($scope); //call goabout service in welcomeService
    };
    $scope.go2Contact = function () {
        console.log("go2Contact function in welcomeCtrl fired");
        welcomeService.gocontact($scope); //call gocontact service in welcomeService
    };
    $scope.go2Privacy = function () {
        console.log("go2Privacy function in welcomeCtrl fired");
        welcomeService.goprivacy($scope); //call goprivacy service in welcomeService
    };
    $scope.go2Terms = function () {
        console.log("go2Terms function in welcomeCtrl fired");
        welcomeService.goterms($scope); //call goterms service in welcomeService
    };
});