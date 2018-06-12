'use strict';

// app.controller('resetCtrl', ['$scope', function ($scope, $routeParams, welcomeService) {
foAapp.controller('resetCtrl', ['$scope', '$routeParams', 'welcomeService', function ($scope, $routeParams, welcomeService) {
    $scope.msgtxt = '';
    $scope.passHash = $routeParams;

    $scope.resetPass = function (user) {
        console.log("resetPass function in controller fired");
        console.log(" userPass: ", user);
        console.log(" scope: ", $scope);
        welcomeService.resetPass(user, $scope); //call resetPass service in welcomeService
    }
}]);