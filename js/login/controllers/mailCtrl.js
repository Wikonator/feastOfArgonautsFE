'use strict';

foAapp.controller('mailCtrl', ['$scope', '$routeParams', 'welcomeService', function ($scope, $routeParams, welcomeService) {
    $scope.msgtxt = '';
    $scope.passHash = $routeParams;

    $scope.mailChange = function () {
        console.log("approveMailChange function in mailCtrl fired");
        welcomeService.mailChange($scope); //call approveMailChange service in welcomeService
    };
    $scope.approveMailChange = function () {
        console.log("approveMailChange function in mailCtrl fired");
        welcomeService.approveMailChange($scope); //call approveMailChange service in welcomeService
    };
    $scope.mailData = function () {
        console.log("readMailChange function in mailCtrl fired");
        welcomeService.readMailChange($scope); //call approveMailChange service in welcomeService
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
// });
}]);