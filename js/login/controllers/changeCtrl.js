'use strict';

foAapp.controller('changeCtrl', ['$scope', '$routeParams', 'welcomeService', function ($scope, $routeParams, welcomeService) {
    $scope.msgtxt = '';
    $scope.mailHash = $routeParams;
    console.log("mailChange function in changeCtrl fired");
    $scope.mailChange = function (mail) {
        console.log("mailChange function in changeCtrl fired");
        welcomeService.mailChange(mail, $scope); //call mailChange service in welcomeService
    }
}]);