'use strict';

foAapp.factory('sessionService', ['$http', function ($http) {
    return {
        set:function (key, value) {
            sessionStorage.setItem(key, value);
            return sessionStorage.setItem(key, value);
        },
        get:function (key) {
            sessionStorage.getItem(key);
            return sessionStorage.getItem(key);
        },
        destroy:function (key) {
            sessionStorage.removeItem(key);
            return sessionStorage.removeItem(key);
        }
    };
}]);