'use strict';

foAapp.controller('welcomeCtrl', function ($scope, welcomeService) {
    $scope.showLogRegVal = false;
    $scope.hideLogRegVal = true;
    $scope.showGuestVal = false;
    $scope.hideGuestVal = true;
    $scope.showForgotVal = false;
    $scope.hideForgotVal = true;

    console.log("welcomeCtrl controller fired");

    $scope.msgtxt = '';
    $scope.init = function () {
        console.log("init function in welcomeCtrl fired");
        $scope.showLoginPage = $scope.showFooterPage = $scope.showPrivacyVal = $scope.hidePrivacyVal = $scope.showTermsVal = $scope.hideTermsVal = $scope.showContactVal = $scope.hideContactVal = $scope.showAboutVal = $scope.hideAboutVal = false;
    };
    $scope.login = function (user) {
        console.log("login function in welcomeCtrl fired");
        welcomeService.login(user, $scope); //call login service in welcomeService
    };
    $scope.logon = function (user) {
        console.log("login function in forgotCtrl fired");
        welcomeService.logon(user, $scope); //call logon service in welcomeService
    };
    $scope.goguest = function () {
        console.log("goguest function in welcomeCtrl fired");
        welcomeService.goguest($scope); //call goguset service in welcomeService
    };
    $scope.gologin = function () {
        console.log("goguset function in welcomeCtrl fired");
        welcomeService.gologin($scope); //call gologin service in welcomeService
    };
    $scope.goforgot = function () {
        console.log("goguset function in welcomeCtrl fired");
        welcomeService.go2forgot($scope); //call gologin service in welcomeService
    };
    $scope.logRegShowHide = function (param, element) {
        console.log("logRegShowHide function in welcomeCtrl fired");
        console.log("logRegShowHide function call with parameter:", param);
        console.log("logRegShowHide function call with element parameter:", element);

        if (param === "show") {
            $scope.showLogRegVal = true;
            $scope.hideLogRegVal = true;
            $scope.showForgotVal = false;
            $scope.hideForgotVal = false
            $scope.showGuestVal = false;
            $scope.hideGuestVal = false;
        }
        else if (param === "hide") {
            $scope.showLogRegVal = false;
            $scope.hideLogRegVal = false;
            $scope.showForgotVal = false;
            $scope.hideForgotVal = false
            $scope.showGuestVal = false;
            $scope.hideGuestVal = false;
        }
        else {
            $scope.showLogRegVal = true;
            $scope.hideLogRegVal = false;
            $scope.showGuestVal = false;
            $scope.hideGuestVal = false;
        }
    };
    $scope.guestShowHide = function (param, element) {
        console.log("guestShowHide function in welcomeCtrl fired");
        console.log("guestShowHide function call with parameter:", param);
        console.log("guestShowHide function call with element parameter:", element);

        if (param === "show") {
            $scope.showLogRegVal = false;
            $scope.hideLogRegVal = false;
            $scope.showForgotVal = false;
            $scope.hideForgotVal = false
            $scope.showGuestVal = true;
            $scope.hideGuestVal = true;
        }
        else if (param === "hide") {
            $scope.showLogRegVal = false;
            $scope.hideLogRegVal = false;
            $scope.showForgotVal = false;
            $scope.hideForgotVal = false
            $scope.showGuestVal = false;
            $scope.hideGuestVal = false;
        }
        else {
            $scope.showLogRegVal = false;
            $scope.hideLogRegVal = false;
            $scope.showForgotVal = false;
            $scope.hideForgotVal = false
            $scope.showGuestVal = true;
            $scope.hideGuestVal = false;
        }
    };
    $scope.forgotShowHide = function (param, element) {
        console.log("forgotShowHide function in welcomeCtrl fired");
        console.log("forgotShowHide function call with parameter:", param);
        console.log("forgotShowHide function call with element parameter:", element);

        if (param === "show") {
            $scope.showLogRegVal = false;
            $scope.hideLogRegVal = false;
            $scope.showForgotVal = true;
            $scope.hideForgotVal = true;
            $scope.showGuestVal = false;
            $scope.hideGuestVal = false;
        }
        else if (param === "hide") {
            $scope.showLogRegVal = false;
            $scope.hideLogRegVal = false;
            $scope.showForgotVal = false;
            $scope.hideForgotVal = false;
            $scope.showGuestVal = false;
            $scope.hideGuestVal = false;
        }
        else {
            $scope.showLogRegVal = false;
            $scope.hideLogRegVal = false;
            $scope.showForgotVal = true;
            $scope.hideForgotVal = false;
            $scope.showGuestVal = false;
            $scope.hideGuestVal = false;
        }
    };
});
