let myApp = angular.module("argonautsApp",["main", "ngCookies"]);

let secondApp = angular.module("main",["ngCookies"]);

angular.module('main').controller("mainController", ['cookieStore', function($scope){
    // Controller body
}]);

//secondApp.constant('API_URL', 'http://89.173.200.63:3000');

myApp.run(function ($rootScope, $http, API_URL) {
    console.log("I fired");
    let newObj = {};
    newObj.width = 700;
    newObj.height = 890;
    $http.defaults.headers.common['Authorization'] = true;
    $http.defaults.headers.common['Resolution'] = { something: 64 };
    console.log($http.defaults.headers.common);
});

