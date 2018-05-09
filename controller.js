let app = angular.module("argonautsApp", ["ngRoute"]);

const IpAddress = "http://BE1.scarabeus.sk:3000";
//var IpAddress = "http://BE2.scarabeus.sk:3000";

app.run(function ($rootScope, $http) {      // setting common headers
    console.log("stal sa run1");
    $http.defaults.headers.common['Authorization'] = true;
    //$http.defaults.headers.common['Resolution'] = newObj;
    //$http.defaults.headers.common['Resolution'] = { width: window.screen.availWidth, height: window.screen.availHeight};
});

app.config(function ($routeProvider) {
    // This is where the Routing happens
    $routeProvider.when("/", {
        templateUrl: "routes/landingPage.html"
    })
        .when("/account", {
            resolve: {
                "check": function ($location, $rootScope) {
                    if (!$rootScope.loggedIn) {
                        $location.path('/');
                    }
                }
            },
            templateUrl: "account.html"
        })
        .when('/register', {
            templateUrl: "registration.html"
        })
        .when("/registerSuccess" , {
            templateUrl: "registerSuccess.html"
        })
        .when("/login", {
            templateUrl: "routes/login.html"
        })
        .when("/logon/:id", {
            resolve: {
                "emailCheck": function ($route, $location, $routeParams, $http) {
                    console.log($route.current.params.id);
                    $http.get( IpAddress + "/api/logon/" + $route.current.params.id)
                        .then(function success(response) {
                                $location.path('/passwordChange');
                            },
                            function error (response) {
                                $location.path('/login');
                            }
                        );

                    }
                }
            })
        .when("/passwordChange/:id", {
            templateUrl: "routes/passwordChange.html"
        })
        .otherwise({
            redirectTo: "/"
        });
});


app.directive( 'goClick', function ( $location ) {  // button clicking
    return function ( scope, element, attrs ) {
        let path;
        attrs.$observe( 'goClick', function (val) {
            path = val;
        });
        element.bind( 'click', function () {
            scope.$apply( function () {
                $location.path( path );
            });
        });
    };
});


app.controller("loginController", function ($scope, $location, $rootScope, $http) {     //login page logic

    $scope.submit = function () {
        let data = {
            login: $scope.registerForm.login,
            pass: $scope.registerForm.password
        };
        console.log(data);
        $http.put(IpAddress + "/api/logon/", data).then(function success(response) {
            console.log(response);
            if (response.value == 1) {
                    $location.path("/account");
                } else {
                    window.alert(response.message);
                }
            }, function error(response) {
            console.log(response);
        });
    }
});

app.controller("registrationController", function ($scope, $http, $location) {                      // registration logic
    $scope.submit = function () {

        $scope.parameters = { "data": $scope.registerForm};
        $http.post(IpAddress + "/api/user", $scope.parameters).then(
            function success(response) {
        console.log(response);
        if (response.data.error === false) {                                 // success - presmeruj na regsuc page
            $location.path("/registerSuccess");
        } else {            //fail  hor.alka@manka.sk 123456
            window.alert(response.data.message.summary);
        }

        }, function error(response) {
            console.log("hanebne zlyhanie");
            console.log(response);
        }
        )
    };
});

app.controller("emailCheck", function ($http, $location) {
    console.log("I am checking this email");
});

app.directive("matchPassword", function () {
    return {
        require: "ngModel",
        scope: {
            otherModelValue: "=matchPassword"
        },
        link: function(scope, element, attributes, ngModel) {

            ngModel.$validators.matchPassword = function(modelValue) {
                return modelValue == scope.otherModelValue;
            };

            scope.$watch("otherModelValue", function() {
                ngModel.$validate();
            });
        }
    };
});

app.controller("passwordCheckController", function ($scope, $http, $route) {


    $scope.submit = function () {
        let data = {
            data: {pass: $scope.confirm_password}
        };
        console.log(data);
        console.log($route.current.params.id);
        let pw = $scope.confirm_password + "";
        $http.put(IpAddress + "/api/logon/" + $route.current.params.id, data)
            .then(function success(response) {
                console.log("success");
                console.log(response);


            }, function error(response) {
            console.log(response);
        });
    }
});

