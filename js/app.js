// 'use strict';
// Declare app level module which depends on views, and components
const foAapp = angular.module('foaApp', ['ngRoute'])
    .controller('footerCtrl', ['$scope', function ($scope) {
        $scope.privacyShowHide = function (param, element) {
            console.log("privacyShowHide function in welcomeCtrl fired");
            console.log("privacyShowHide function call with parameter:", param);
            console.log("privacyShowHide function call with element parameter:", element);

            // $scope.showFooterPage = true;

            if (param === "show") {
                $scope.showPrivacyVal = true;
                $scope.hidePrivacyVal = true;
                $scope.showTermsVal = false;
                $scope.hideTermsVal = false;
                $scope.showContactVal = false;
                $scope.hideContactVal = false;
                $scope.showAboutVal = false;
                $scope.hideAboutVal = false;
            }
            else if (param === "hide") {
                $scope.showPrivacyVal = false;
                $scope.hidePrivacyVal = false;
                $scope.showTermsVal = false;
                $scope.hideTermsVal = false;
                $scope.showContactVal = false;
                $scope.hideContactVal = false;
                $scope.showAboutVal = false;
                $scope.hideAboutVal = false;
            }
            else {
                $scope.showPrivacyVal = true;
                $scope.hidePrivacyVal = false;
                $scope.showTermsVal = false;
                $scope.hideTermsVal = false;
                $scope.showContactVal = false;
                $scope.hideContactVal = false;
                $scope.showAboutVal = false;
                $scope.hideAboutVal = false;
            }

            $scope.showFooterPage = 0
                ||  $scope.showPrivacyVal   ||  $scope.hidePrivacyVal
                ||  $scope.showTermsVal     ||  $scope.hideTermsVal
                ||  $scope.showContactVal   ||  $scope.hideContactVal
                ||  $scope.showAboutVal     ||  $scope.hideAboutVal;

            // welcomeService.containerShowHide($scope, param); //call containerShowHide in welcomeService
        };
        $scope.termsShowHide = function (param, element) {
            console.log("termsShowHide function in welcomeCtrl fired");
            console.log("termsShowHide function call with parameter:", param);
            console.log("termsShowHide function call with element parameter:", element);

            // $scope.showFooterPage = true;

            if (param === "show") {
                $scope.showPrivacyVal = false;
                $scope.hidePrivacyVal = false;
                $scope.showTermsVal = true;
                $scope.hideTermsVal = true;
                $scope.showContactVal = false;
                $scope.hideContactVal = false;
                $scope.showAboutVal = false;
                $scope.hideAboutVal = false;
            }
            else if (param === "hide") {
                $scope.showPrivacyVal = false;
                $scope.hidePrivacyVal = false;
                $scope.showTermsVal = false;
                $scope.hideTermsVal = false;
                $scope.showContactVal = false;
                $scope.hideContactVal = false;
                $scope.showAboutVal = false;
                $scope.hideAboutVal = false;
            }
            else {
                $scope.showPrivacyVal = false;
                $scope.hidePrivacyVal = false;
                $scope.showTermsVal = true;
                $scope.hideTermsVal = false;
                $scope.showContactVal = false;
                $scope.hideContactVal = false;
                $scope.showAboutVal = false;
                $scope.hideAboutVal = false;
            }
            $scope.showFooterPage = 0
                ||  $scope.showPrivacyVal   ||  $scope.hidePrivacyVal
                ||  $scope.showTermsVal     ||  $scope.hideTermsVal
                ||  $scope.showContactVal   ||  $scope.hideContactVal
                ||  $scope.showAboutVal     ||  $scope.hideAboutVal;

            // welcomeService.containerShowHide($scope, param); //call containerShowHide in welcomeService
        };
        $scope.contactShowHide = function (param, element) {
            console.log("contactShowHide function in welcomeCtrl fired");
            console.log("contactShowHide function call with parameter:", param);
            console.log("contactShowHide function call with element parameter:", element);

            // $scope.showFooterPage = true;

            if (param === "show") {
                $scope.showPrivacyVal = false;
                $scope.hidePrivacyVal = false;
                $scope.showTermsVal = false;
                $scope.hideTermsVal = false;
                $scope.showContactVal = true;
                $scope.hideContactVal = true;
                $scope.showAboutVal = false;
                $scope.hideAboutVal = false;
            }
            else if (param === "hide") {
                $scope.showPrivacyVal = false;
                $scope.hidePrivacyVal = false;
                $scope.showTermsVal = false;
                $scope.hideTermsVal = false;
                $scope.showContactVal = false;
                $scope.hideContactVal = false;
                $scope.showAboutVal = false;
                $scope.hideAboutVal = false;
            }
            else {
                $scope.showPrivacyVal = false;
                $scope.hidePrivacyVal = false;
                $scope.showTermsVal = false;
                $scope.hideTermsVal = false;
                $scope.showContactVal = true;
                $scope.hideContactVal = false;
                $scope.showAboutVal = false;
                $scope.hideAboutVal = false;
            }
            $scope.showFooterPage = 0
                ||  $scope.showPrivacyVal   ||  $scope.hidePrivacyVal
                ||  $scope.showTermsVal     ||  $scope.hideTermsVal
                ||  $scope.showContactVal   ||  $scope.hideContactVal
                ||  $scope.showAboutVal     ||  $scope.hideAboutVal;
            // welcomeService.containerShowHide($scope, param); //call containerShowHide in welcomeService
        };
        $scope.aboutShowHide = function (param, element) {
            console.log("aboutShowHide function in welcomeCtrl fired");
            console.log("aboutShowHide function call with parameter:", param);
            console.log("aboutShowHide function call with element parameter:", element);
            // $scope.showFooterPage = true;

            if (param === "show") {
                $scope.showPrivacyVal = false;
                $scope.hidePrivacyVal = false;
                $scope.showTermsVal = false;
                $scope.hideTermsVal = false;
                $scope.showContactVal = false;
                $scope.hideContactVal = false;
                $scope.showAboutVal = true;
                $scope.hideAboutVal = true;
            }
            else if (param === "hide") {
                $scope.showAboutVal = false;
                $scope.hideAboutVal = false;
                $scope.showContactVal = false;
                $scope.hideContactVal = false;
                $scope.showTermsVal = false;
                $scope.hideTermsVal = false;
                $scope.showPrivacyVal = false;
                $scope.hidePrivacyVal = false;
            }
            else {
                $scope.showPrivacyVal = false;
                $scope.hidePrivacyVal = false;
                $scope.showTermsVal = false;
                $scope.hideTermsVal = false;
                $scope.showContactVal = false;
                $scope.hideContactVal = false;
                $scope.showAboutVal = true;
                $scope.hideAboutVal = false;
            }
            $scope.showFooterPage = 0
                ||  $scope.showPrivacyVal   ||  $scope.hidePrivacyVal
                ||  $scope.showTermsVal     ||  $scope.hideTermsVal
                ||  $scope.showContactVal   ||  $scope.hideContactVal
                ||  $scope.showAboutVal     ||  $scope.hideAboutVal;

            // welcomeService.containerShowHide($scope, param); //call containerShowHide in welcomeService
        };
    }])
    .controller('inputValidation', ['$scope', function ($scope) {
        $scope.loginerr = true;
        $scope.mailerr = true;
        $scope.hideLogin = true;
        $scope.hideMail = false;
        $scope.hideAccept = false;

        for (let key in $scope) {
            if (key.hasOwnProperty('login')) {
                key.login = "";
            }
            if (key.hasOwnProperty('mail')) {
                key.mail = "";
            }
        }
        $scope.msgtxt = "";
        $scope.msgRegistrationStatus = 1;
        console.log("inputValidation function in welcomeCtrl fired");
        $scope.loginVal = function (element) {
            console.log("inputValidation $scope." +  element + ".login: " + $scope[element].login);
            if($scope[element].login){
                if ($scope[element].login.toString().indexOf('@') > -1){
                    $scope.msgtxt = "Login can't contains @ character";
                    console.log("inputValidation Login contains @ character");
                }
                else {
                    if ($scope[element].login.toString().length < 5) {
                        $scope.msgtxt = "Login must have min. 5 characters";
                        $scope.loginerr = true;
                        console.log("inputValidation Login < 5");
                    }
                    else if ($scope[element].login.toString().length > 30) {
                        $scope.msgtxt = "Login must have MAX. 30 characters";
                        $scope[element].login = $scope[element].login.toString().substr(0, $scope[element].login.toString().length - 1);
                        $scope.loginerr = true;
                        console.log("inputValidation Login > 30");
                    }
                    else {
                        $scope.msgtxt = "";
                        $scope.loginerr = false;
                        console.log("inputValidation Login OK");
                    }
                    console.log("OOOO");
                }
            }
            else {
                $scope.msgtxt= "";
                $scope.login = "";
                console.log("UUUU");
            }
        };
        $scope.mailVal = function (element) {
            // console.log("inputValidation $scope.myMail:", $scope.myMail);
            console.log("inputValidation $scope." + element + "mail: ", $scope[element].mail);
            if($scope[element].mail){
                if ($scope[element].mail.toString().indexOf('@') < -1){
                    $scope.mailerr = true;
                    $scope.msgtxt = "Invalid mail";
                    console.log("inputValidation Mail not contains @ character");
                }
                else {
                    if ($scope[element].mail.toString().length < 5) {
                        $scope.msgtxt = "Invalid mail ..";
                        $scope.mailerr = true;
                        console.log("Mail must have min. 5 characters");
                    }
                    else if ($scope[element].mail.toString().length > 30) {
                        $scope.msgtxt = "Login must have MAX. 30 characters";
                        $scope.msgtxt = "Invalid mail, to long ...";
                        $scope.myMail = $scope[element].mail.toString().substr(0, $scope[element].mail.toString().length - 1);
                        $scope.mailerr = true;
                        console.log("Mail can have max. 30 characters");
                    }
                    else {
                        $scope.msgtxt = "";
                        $scope.mailerr = false;
                        console.log("inputValidation mail OK");
                    }
                    console.log("OOOO");
                }
            }
            else {
                $scope.msgtxt= "";
                $scope.mail = "";
                $scope.mailerr = true;
                $scope.msgtxt = "Invalid mail";
                console.log("UUUU");
            }
        };
        $scope.acceptVal = function (accept) {
            console.log("inputValidation accept: ", $scope.accept);
            console.log("inputValidation accept: ", accept);
            if (!accept) {
                $scope.accepterr = true;
                $scope.msgtxt = "You need accept Terms !!!";
                console.log("inputValidation checkbox Accept needs to checked ..");
            }
            else {
                $scope.msgtxt= "";
                $scope.accpeterr = true;
                // $scope.msgtxt = "Invalid mail";
                console.log("UUUU");
            }
        };
        $scope.go2Mail = function (element) {
            console.log("inputValidation go2Mail fired");
            if (!$scope.loginerr) {
                $scope[element].mail = "";
                $scope.hideLogin = false;
                $scope.hideMail = true;
                $scope.hideAccept = false;
                $scope.msgRegistrationStatus = 2;
            }
        };
        $scope.go2Login = function () {
            console.log("inputValidation go2Login fired");
            console.log("$scope.mailerr:", $scope.mailerr);
            if (!$scope.mailerr) {
                $scope.hideLogin = true;
                $scope.hideMail = false;
                $scope.hideAccept = false;
                $scope.msgRegistrationStatus = 1;
            }
        };
        $scope.go2Accept = function () {
            console.log("inputValidation go2Accept fired");
            console.log("$scope.mailerr:", $scope.mailerr);
            if (!$scope.mailerr) {
                $scope.hideLogin = false;
                $scope.hideMail = false;
                $scope.hideAccept = true;
                $scope.msgRegistrationStatus = 3;
            }
        };
    }])
    .controller('forgotCtrl', function ($scope, welcomeService) {
        $scope.msgtxt = '';
        $scope.sendforgot = function (mail) {
            console.log("forgot function in forgot fired:", mail);
            welcomeService.sendforgot(mail, $scope); //call login service in welcome
        }
    })
    .controller('signInCtrl', function ($scope, welcomeService) {
        $scope.msgtxt = '';
        $scope.sendLogin = function (user, accept) {
            console.log("sendLogin function in forgot fired user:", user);
            console.log("sendLogin function in forgot fired accept:", accept);
            welcomeService.logon(user, accept, $scope); //call login service in welcome
        }
    });

foAapp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'partials/welcome.html', controller: 'welcomeCtrl'});
    $routeProvider.when('/welcome', {templateUrl: 'partials/welcome.html', controller: 'welcomeCtrl'});
    $routeProvider.when('/reset/:id', {templateUrl: 'partials/reset.html', controller: 'resetCtrl'});
    $routeProvider.when('/change', {templateUrl: 'partials/change.html', controller: 'changeCtrl'});
    $routeProvider.when('/mail/:id', {templateUrl: 'partials/mail.html', controller: 'mailCtrl'});
    $routeProvider.when('/profile', {templateUrl: 'partials/profile.html', controller: 'profileCtrl'});
    $routeProvider.when('/statistic', {templateUrl: 'partials/statistic.html', controller: 'statisticCtrl'});
    $routeProvider.when('/game', {templateUrl: 'partials/game.html', controller: 'gameCtrl'});

    $routeProvider.otherwise({redirectTo: '/'});
}]);

foAapp.run(function ($rootScope, $location, welcomeService ) {
    let routepermission = ['/profile', '/game', '/change', '/statistic'];
    $rootScope.myRes = '';
    $rootScope.$on('$routeChangeStart', function () {
        if (routepermission.indexOf($location.path()) != -1) {
            if(!welcomeService.islogged())
                $location.path('/');
            else {
                let connected = welcomeService.islogged();
                connected.then(function (msg) {
                    $rootScope.myRes = msg.data;
                    $rootScope.statuscode = msg.status;
                    console.log("msg: ", msg);
                    console.log("msg.data: ", msg.data);
                    if (!msg.data || !msg) {
                        console.log("NEnasli sa data");
                        $location.path('/');
                    }
                    else {
                        $rootScope.profile = msg.data.user;
                        console.log("Nasli sa DATA");
                    }
                }, function myError(response) {
                    $rootScope.myRes = response.statusText;
                    $rootScope.statuscode = response.status;
                    $location.path('/');
                });
            }
        }
    });
});