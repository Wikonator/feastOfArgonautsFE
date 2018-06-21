'use strict';

foAapp.controller('guestCtrl', function ($scope, welcomeService) {
    $scope.msgtxt = '';
    $scope.try2play = function (element, force) {
        console.log("try2play function in guestCtrl fired");
        console.log("try2play function in guestCtrl guest parameter come:", element);
        console.log("try2play function in guestCtrl force parameter come:", force);
        // console.log("try2play function in guestCtrl guest parameter come:", guest);
        welcomeService.try2play(element, force, $scope); //call login service in welcome
    };
});