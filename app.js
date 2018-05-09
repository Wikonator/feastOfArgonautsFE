let myApp = angular.module("argonautsApp",['main']);

let secondApp = angular.module("main",[]);

// angular.module("main").controller("mainController",function($scope){
//     // Controller body
// });

secondApp.config(function ($rootScope, $http) {
    console.log("config goes");
    $http.defaults.headers.common['Authorization'] = true;
    $http.defaults.headers.common['Resolution'] = { something: 64 };
});

secondApp.constant('API_URL', 'http://89.173.200.63:3000');

myApp.run(function ($rootScope, $http, API_URL) {
    console.log("I fired");
    let newObj = {};
    newObj.width = 700;
    newObj.height = 890;
    $http.defaults.headers.common['Authorization'] = true;
    $http.defaults.headers.common['Resolution'] = { something: 64 };
    console.log($http.defaults.headers.common);
});

