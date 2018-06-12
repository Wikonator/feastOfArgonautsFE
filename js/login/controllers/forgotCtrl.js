'use strict';

foAapp.controller('forgotCtrl', function ($scope, welcomeService) {
    $scope.msgtxt = '';
    $scope.sendforgot = function (mail) {
        console.log("forgot function in forgot fired:", mail);
        welcomeService.sendforgot(mail, $scope); //call login service in welcome
    }
});