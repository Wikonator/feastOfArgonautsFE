let app = angular.module("argonautsApp", ["ngRoute", "ngCookies"]);

//const IpAddress = "http://BE1.scarabeus.sk:5000";
const IpAddress = "http://BE2.scarabeus.sk:5000";


app.run(function ($rootScope, $http) {      // setting common headers
    console.log("stal sa run1");
    $rootScope.globalVariable = {};
    $rootScope.imageHolder = {
        path: "foabg.png"
    };
    //$http.defaults.headers.common['Authorization'] = true;
    //$http.defaults.headers.common['Resolution'] = newObj;
    //$http.defaults.headers.common['Resolution'] = { width: window.screen.availWidth, height: window.screen.availHeight};
});

app.config(function ($routeProvider) {
       const secondImagePath = "mainScreen.png";
    // This is where the Routing happens
    $routeProvider.when("/", {
        templateUrl: "routes/landingPage.html"
    })
        .when("/account", {
            resolve: {
                "check": function ($location, $rootScope) {
                    if (!$rootScope.loggedIn) {
                        $location.path('/account');
                    }
                }
            },
            templateUrl: "account.html"
        })
        .when('/register', {
            templateUrl: "registration.html"
        })
        // .when("/registerSuccess" , {
        //     templateUrl: "registerSuccess.html"
        // })
        .when("/login", {
            templateUrl: "routes/login.html"
        })
        .when("/logout", {
            templateUrl: "routes/logout.html"
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
        .when("/playTheGame", {
            resolve: {
                "imageSwap": function ($q, $http, $rootScope, $location) {
                    let resolvePromise = $q.defer();

                    $http.get(IpAddress + "/api/town").then(function success(response) {

                        if (response.status !== 200) {
                            $location.path("/register");
                            resolvePromise.resolve();
                        } else {
                            resolvePromise.resolve();
                        }

                    }, function error(response) {
                        console.log(response);
                        $rootScope.imageHolder = secondImagePath;
                        $location.path("/register");
                        resolvePromise.resolve();

                    });
                    return resolvePromise.promise;

                }
            } ,
            controller: "imageSwapController",
            templateUrl: "routes/feastOfArgonauts.html",
            })
        .otherwise({
            redirectTo: "/"
        })
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

app.controller("imageSwapController", function ($cookieStore) {
    $cookieStore.get('token');
    console.log("get it");
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
                    $location.path("/playTheGame");
                } else {
                    window.alert(response.message);
                }
            }, function error(response) {
            console.log("error");
            console.log(response);
        });
    }
});

app.controller("registrationController", function ($scope, $http, $location, $cookieStore) {                      // registration logic
    $scope.submit = function () {

        $scope.parameters = { "data": $scope.registerForm};
        $http.post(IpAddress + "/api/user", $scope.parameters).then(
            function success(response) {
        console.log(response);
        if (response.data.error === false) {
            // success - presmeruj na regsuc page
            $cookieStore.put("token", response.data.token);  // refactor this into a separate service
            console.log($cookieStore.get("token"));
            $location.path("/playTheGame");
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

// app.controller("emailCheck", function ($http, $location) {
//     console.log("I am checking this email");
// });

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

app.factory("authenticationService", ['$q', '$location', '$cookieStore' ,function ( $q, $location, $cookieStore) {

    return {
        'request' : function (config) {
            // success handling
            config.headers['Authorization'] = $cookieStore.get("token");
            return config
        },

        'requestError' : function (reject) {
            // error handlinlg
            return reject
        },

        'response' : function (response) {
            // do something on positive response
            // console.log(response.status);
            if (response.status === 401 ) {
                //$location.path('/login');
                return response;
            }
            return response
        },

        'responseError' : function (rejected) {
            // do something on negative response
            return rejected
        }
    }
}]);

app.config(["$httpProvider", function ($httpProvider) { // here i Push the interceptor into the module
    $httpProvider.interceptors.push('authenticationService')
}]);


app.run(["$rootScope", "$location", function($rootScope, $location) {
    $rootScope.$on("$routeChangeSuccess", function(userInfo) {
        console.log(userInfo);
    });

    $rootScope.$on("$routeChangeError", function(event, current, previous, eventObj) {
        if (eventObj.authenticated === false) {
            $location.path("/register");
        }
    });
}]);

app.controller("guestController",
        function ($scope, $http, $location, $cookieStore) {
    $scope.submit = function () {
        $scope.parameters = {
            "data": $scope.registerForm
        };
        console.log($scope.parameters);
        $http.post(IpAddress + "/api/guest", $scope.parameters)

            .then(function success(response) {

                //$http.defaults.headers.common['Authorization'] = response.data.token;
                $cookieStore.put("token", response.data.token);  // refactor this into a separate service
                console.log($cookieStore.get("token"));
                $location.path('/playTheGame');

            }, function error(error) {

                console.log("Nepodaril sa guest");
                console.log(error);
                // sem pridas error handling
                $scope.inputFieldClass = "invalidInputField";
                $scope.errorField = error.data.details[0].message;

            });

    }

});

app.controller("logoutController",
    function ($scope, $http, $cookieStore) {
        $scope.submit = function () {
            $cookieStore.remove("token");

        }

    });