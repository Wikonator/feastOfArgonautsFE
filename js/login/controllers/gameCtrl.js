'use strict';

foAapp.controller('gameCtrl', ['$scope', 'welcomeService', 'littleService', function ($scope, welcomeService, littleService) {
    $scope.msgtxt = '';
    $scope.init = function () {
        console.log("runlittle function in littleService fired");
        littleService.runlittle(); //init runlittle service in welcomeService
    };
    $scope.logout=function () {
        welcomeService.logout();
    };
    $scope.login = function (user) {
        console.log("login function in welcomeCtrl fired");
        welcomeService.login(user, $scope); //call login service in welcomeService
    };
    $scope.goguest = function () {
        console.log("goguest function in welcomeCtrl fired");
        welcomeService.goguest($scope); //call goguset service in welcomeService
    };
    $scope.gologin = function () {
        console.log("goguset function in welcomeCtrl fired");
        welcomeService.gologin($scope); //call gologin service in welcomeService
    };
    $scope.go2profile=function () {
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
}]);