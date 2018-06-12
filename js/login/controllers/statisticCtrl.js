'use strict';

foAapp.controller('statisticCtrl', function ($scope, welcomeService) {
    $scope.go2statistic = function () {
        welcomeService.gostatistic();
    };
    $scope.go2profile = function () {
        welcomeService.goprofile();
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
    $scope.logout = function () {
        welcomeService.logout();
    };
});