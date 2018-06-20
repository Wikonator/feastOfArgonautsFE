'use strict';

foAapp.controller('profileCtrl', ['$scope', 'welcomeService', function ($scope, welcomeService) {
    $scope.welcome = '';
    $scope.mailVisible = false;

    $scope.accountMailVisible = function () {
        console.log("$scope.profile.method:", $scope.profile.method);
        if ($scope.profile.method === "guest") {
            console.log("User je guest");
            $scope.mailVisible = false;
        }
        else {
            console.log("User je local alebo fb");
            $scope.mailVisible = true;
        }
    };
    $scope.mailVal = function (element) {

        console.log("profileCtrl - inputValidation $scope: " + JSON.stringify($scope.nev) );
        console.log("profileCtrl- inputValidation $scope." + element );
        console.log("inputValidation $scope." + element + "mail: " + $scope.nev.mail);
        if($scope[element].mail){
            if ($scope[element].mail.toString().indexOf('@') < -1){
                $scope.mailerr = true;
                $scope.msgtxt = "Invalid mail";
                // console.log("inputValidation Mail not contains @ character");
            }
            else {
                if ($scope[element].mail.toString().length < 5) {
                    $scope.msgtxt = "Invalid mail ..";
                    $scope.mailerr = true;
                    // console.log("Mail must have min. 5 characters");
                }
                else if ($scope[element].mail.toString().length > 30) {
                    $scope.msgtxt = "Login must have MAX. 30 characters";
                    $scope.msgtxt = "Invalid mail, to long ...";
                    $scope.myMail = $scope[element].mail.toString().substr(0, $scope[element].mail.toString().length - 1);
                    $scope.mailerr = true;
                    // console.log("Mail can have max. 30 characters");
                }
                else {
                    $scope.msgtxt = "";
                    $scope.mailerr = false;
                    // console.log("inputValidation mail OK");
                }
                console.log("OOOO");
            }
        }
        else {
            $scope.msgtxt= "";
            $scope.mail = "";
            $scope.mailerr = true;
            $scope.msgtxt = "Invalid mail";
            // console.log("Blind way");
        }
    };
    $scope.mailChange = function (element) {
        // console.log("inputValidation go2Accept fired");
        welcomeService.regmail(element, false, $scope);
        if ($scope.msgtxt == '')
            $scope.profileShowHide('hide', 'forgot');
    };
    $scope.reg2game = function (accept) {
        // console.log("inputValidation reg2game fired");
        if (accept) welcomeService.gameRegFire(accept); //call login service in welcome
    };
    $scope.logout = function () {
        welcomeService.logout();
    };
}]);