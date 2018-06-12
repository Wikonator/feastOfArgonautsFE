'use strict';

foAapp.controller('guestCtrl', function ($scope, welcomeService) {
    $scope.msgtxt = '';
    $scope.try2play = function (guest) {
        console.log("login function in guestCtrl fired");
        welcomeService.try2play(guest, $scope); //call login service in welcome
    };
});