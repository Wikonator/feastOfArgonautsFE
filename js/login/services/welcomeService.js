'use strict';
const feServer = {
    dev: 'localhost',
    test: 'foa2.regexcloud.sk',
    prod: 'foa.regexcloud.sk'
};
// let actualFeServer = feServer.dev;
let actualFeServer = feServer.test;
// let actualFeServer = feServer.prod;

foAapp.factory('welcomeService', function ($http, $location, sessionService) {
    return {
        fblogin:function(user, scope) {
            let req = {};
            req.data = user;
            console.log('Function login in namespace welcomeService', req);

            let $promise=$http.post('http://' + actualFeServer + ':5000/API/fb', req);  //send request with data to backEnd

            $promise.then(function (msg) {
                console.log('msg:', msg);

                let token = '';

                if (msg.hasOwnProperty('data')) {
                    console.log('msg.data:', msg.data);
                    if(msg.data.hasOwnProperty('error')) {
                        if((msg.data.error === false) && (msg.data.hasOwnProperty('token'))) {
                            scope.msgtxt = msg.data.msg.result;
                            token = msg.data.token;
                            sessionService.set('token', token);
                            $location.path('/profile');
                        }
                        else {
                            scope.msgtxt = msg.data.msg.result;
                            $location.path('/welcome');
                        }
                    }
                    else {
                        scope.msgtxt = 'Login FAILED';
                        $location.path('/welcome');
                    }
                }
                else {
                    scope.msgtxt = 'Login FAILED';
                    $location.path('/welcome');
                }
            })
        },
        login:function(user, scope) {
            let req = {};
            req.data = user;

            console.log('Function login in namespace welcomeService', req);

            let $promise = $http.post('http://' + actualFeServer + ':5000/API/logonTest', req);  //send request with data to backEnd

            $promise.then(function (msg) {
                console.log('msg:', msg);

                let token = '';

                if (msg.hasOwnProperty('data')) {
                    console.log('msg.data:', msg.data);
                    if(msg.data.hasOwnProperty('error')) {
                        if((msg.data.error === false) && (msg.data.hasOwnProperty('token'))) {
                            scope.msgOKtxt = msg.data.msg.result;
                            token = msg.data.token;
                            sessionService.set('token', token);
                            $location.path('/game');
                            // window.$location.path('http://' + feServer.prod);
                            // setTimeout(function () { window.location.href = 'http://' + feServer.prod; }, 0);
                        }
                        else {
                            scope.msgtxt = msg.data.msg.result;
                            console.log("I AM HERE");
                            if (msg.data.msg.hasOwnProperty('field')) {
                                if (msg.data.msg.field.hasOwnProperty('mail'))
                                    scope.msgtxtlogin = msg.data.msg.field.mail;

                                if (msg.data.msg.field.hasOwnProperty('pass'))
                                    scope.msgtxtpass = msg.data.msg.field.pass;
                            }
                            scope.msgKOtxt = msg.data.msg.result;
                        }
                    }
                    else { scope.msgtxt = 'Login FAILED';}
                }
                else { scope.msgtxt = 'Login FAILED';}
            })
        },
        try2play:function(element, force, scope) {
            let req = {};
            console.log('element:', element);
            console.log('guest:', scope[element]);
            console.log('force:', force);
            if (force) req.data = element;
            else req.data = scope[element];
            console.log('req:', req);
            let $promise = $http.post('http://' + actualFeServer + ':5000/api/guestTest', req);  //send request with data to backEnd

            $promise.then(function (msg) {
                console.log('msg:', msg);
                let token = '';
                if (msg.hasOwnProperty('data')) {
                    console.log('msg.data:', msg.data);
                    if (msg.data.hasOwnProperty('error')) {
                        if ((msg.data.error === false) && (msg.data.hasOwnProperty('token'))) {
                            scope.msgtxt = msg.data.msg.result; //Successfull LOGIN 4 try
                            token = msg.data.token;
                            sessionService.set('token', token);

                            if (force)
                                $location.path('/game');
                            else {
                                scope[element].mail = "";
                                scope.hideLogin = false;
                                scope.hideMail = true;
                                scope.hideAccept = false;
                                scope.msgRegistrationStatus = 2;
                            }
                        }
                        else {
                            scope.msgtxt = msg.data.msg.result;
                            if (msg.data.msg.hasOwnProperty('field'))
                                if (msg.data.msg.field.hasOwnProperty('login'))
                                    scope.msgtxt = msg.data.msg.field.login;
                        }
                    }
                    else { scope.msgtxt = 'Login FAILED'; }
                }
                else { scope.msgtxt = 'Login FAILED';}
            })
        },
        regmail:function(element, force, scope) {

            let req = {};

            console.log('regmail fired:');
            console.log('element:', element);
            console.log('scope:', scope);
            console.log('guest:', scope[element]);
            console.log('force:', force);
            if (scope.hasOwnProperty(element)){
                console.log("element v scope existuje");
                if (!scope[element].hasOwnProperty('login')) {
                    console.log("Login v scope element chýba");
                    console.log("scope.profile[scope.profile.method].login", scope.profile[scope.profile.method].login);
                    scope[element].login = scope.profile[scope.profile.method].login;
                    console.log("scope[element].login", scope[element].login);
                    console.log("Login som doplnil ... ");
                }
            }

            if (force) req.data = element;
            else req.data = scope[element];
            console.log('req:', req);

            console.log('Function regmail for register mail in namespace welcomeService', req);

            let $promise = $http.post('http://' + actualFeServer + ':5000/API/regmail', req,
                $http.defaults.headers.common['Authorization'] = sessionService.get('token'), req);

            $promise.then(function (msg) {
                console.log('msg:', msg);

                let token = '';

                if (msg.hasOwnProperty('data')) {
                    console.log('msg.data:', msg.data);
                    if(msg.data.hasOwnProperty('error')) {
                        if((msg.data.error === false) && (msg.data.hasOwnProperty('token'))) {
                            scope.msgOKtxt = msg.data.msg.result;
                            //scope.msgtxt = msg.data.msg.result;
                            // scope.msgOKtxt = msg.data.msg.field.mail;
                            token = msg.data.token;
                            sessionService.set('token', token);


                            if (force)
                                $location.path('/game');
                            else {
                                scope.hideLogin = false;
                                scope.hideMail = false;
                                scope.hideAccept = true;
                                scope.msgRegistrationStatus = 3;
                            }
                        }
                        else
                            {
                            // scope.msgtxt = msg.data.msg.result;
                            scope.msgtxt = msg.data.msg.field.mail;
                            scope.msgKOtxt = msg.data.msg.result;
                            // scope.msgKOtxt = msg.data.msg.field.mail;
                            console.log("I AM HERE");

                            if (msg.data.msg.hasOwnProperty('field')) {
                                if (msg.data.msg.field.hasOwnProperty('mail'))
                                    //scope.msgtxtpass = msg.data.msg.field.mail;
                                    scope.msgtxt = msg.data.msg.field.mail;
                            }
                        }
                    }
                    else { scope.msgtxt = 'Login FAILED';}
                }
                else { scope.msgtxt = 'Login FAILED';}
            })
        },
        gameRegFire:function(accept) {
            // console.log('gamefire fired:');
            if(accept) $location.path('/game');
        },
        logout: function () {
            sessionService.destroy('token');
            $location.path('/welcome');
        },
        islogged: function () {
            if(sessionService.get('token')) {
                return $http.get('http://' + actualFeServer + ':5000/API/validateToken',
                    $http.defaults.headers.common['Authorization'] = sessionService.get('token'));
            }
            else {
                return false
            }
        },
        logon: function(user, accept, scope) {
            let req = {};
            scope.msgtxt = scope.msgtxtmail = scope.msgtxtlogin = '';
            req.data = user;
            if (accept) {
                console.log('Function logon in namespace welcomeService', req);
                console.log("Accept checked");
//                delete req.data['accept'];
                let $promise=$http.post('http://' + actualFeServer + ':5000/API/userTest', req);  //send request with data to backEnd

                $promise.then(function (msg) {
                    console.log('msg:', msg);

                    let token = '';
                    scope.msgtxt = scope.msgtxtmail = scope.msgtxtlogin = '';
                    scope.msgtxt = 'Login FAILED';

                    if (msg.hasOwnProperty('data')) {
                        console.log('msg.data:', msg.data);
                        if(msg.data.hasOwnProperty('error')) {
                            if((msg.data.error === false) && (msg.data.hasOwnProperty('token'))) {
                                scope.msgtxt = msg.data.msg.result;
                                token = msg.data.token;
                                sessionService.set('token', token);
                                $location.path('/game');
                            }
                            else {
                                // scope.msgtxt = scope.msgtxtmail = scope.msgtxtlogin = 'unknown error';
                                scope.msgtxt = scope.msgtxtmail = scope.msgtxtlogin = '';
                                console.log("msg data error je false");
                                console.log("msg:", msg);
                                if (msg.data.hasOwnProperty('msg')) {
                                    if (msg.data.msg.hasOwnProperty('result')) {
                                        console.log("msg.data.msg.result EXIST and has been fill");
                                        scope.msgtxt = msg.data.msg.result;
                                    }
                                    if (msg.data.msg.hasOwnProperty('field')) {
                                        console.log("msg.data.msg.field EXIST and has been fill");
                                        if (msg.data.msg.field.hasOwnProperty('mail')) {
                                            console.log("msg.data.msg.field.mail EXIST and has been fill");
                                            scope.msgtxtmail = msg.data.msg.field.mail;
                                        }
                                        if (msg.data.msg.field.hasOwnProperty('login')) {
                                            console.log("msg.data.msg.field.login EXIST and has been fill");
                                            scope.msgtxtlogin = msg.data.msg.field.login;
                                        }
                                    }
                                }
                            }
                        }
                    }
                })
            }
            else {
                console.log("Accept not checked");
                // scope.msgtxt = scope.msgtxtmail = scope.msgtxtlogin = '';
                scope.msgtxt = 'U need accept !!!';
            }
        },
        sendforgot: function(mail, scope) {
            let req = {};
            req.data = mail;
            //console.log('Function login in namespace welcomeService', user);
            console.log('Function sendforgot in namespace welcomeService', req);

            let $promise=$http.post('http://' + actualFeServer + ':5000/api/forgot', req);  //send request with data to backEnd

            $promise.then(function (msg) {
                console.log('msg:', msg);
                scope.msgtxt = 'Mail sended';
                $location.path('/profile');
                return true
            });
        },
        resetPass: function(user, scope) {
            let req = {};
            console.log('scope.passHash:', scope.passHash.id);
            console.log('user:', user);
            req.data = { pass: user.pass, token: scope.passHash.id};
            console.log('Function resetPass in namespace welcomeService', JSON.stringify(req));
            if (user.pass !== user.confirm) {
                scope.msgtxt = 'Password and Confirmation not match';
                return false
            }
            else {
                // let $promise = $http.post('http://' + actualFeServer + ':5000/API/reset', req,
                //     $http.defaults.headers.common['Authorization'] = scope.passHash);
                let $promise = $http.post('http://' + actualFeServer + ':5000/API/reset', req);  //send request with data to backEnd
                // let $promise = $http.post('http://localhost:5000/api/reset', {});  //send request with data to backEnd

                $promise.then(function (msg) {
                    console.log('msg:', msg);
                    console.log('(msg):', (msg));
                    if (msg.hasOwnProperty('data')) {
                        console.log('msg.data.hasOwnProperty(error):', msg.data.hasOwnProperty('error'));
                        if (msg.data.hasOwnProperty('error')) {
                            console.log('msg.data.error:', msg.data.error);
                            if (!msg.data.error) {
                                if (msg.data.msg.hasOwnProperty('result')) {
                                    scope.msgtxt = msg.data.msg.result;
                                    // scope.msgcolour = 'style="color: green"';
                                    $location.path('/login');
                                    return true
                                }
                                else {
                                    scope.msgtxt = 'PASSWORD not changed';
                                    // scope.msgcolour = 'style="color: green"';
                                    $location.path('/login');
                                    return false
                                }
                            }
                            else {
                                scope.msgtxt = 'PASSWORD not changed';
                                // scope.msgcolour = 'style="color: red"';
                                return false
                            }
                        }
                        else {
                            scope.msgtxt = 'PASSWORD not changed';
                            // scope.msgcolour = 'style="color: red"';
                            return false
                        }
                    }
                    else {
                        scope.msgtxt = 'PASSWORD changed';
                        // scope.msgcolour = 'style="color: red"';
                        $location.path('/login');
                        return true
                    }
                });
            }
        },
        mailChange: function(mail, scope) {
            let req = {};
            req.data = mail;
            console.log('req.data:', req.data);
            console.log('Function mailChange in namespace welcomeService', mail);
            console.log('Function mailChange in namespace welcomeService', req);

            let $promise = $http.post('http://' + actualFeServer + ':5000/API/change', req,
                $http.defaults.headers.common['Authorization'] = sessionService.get('token'), req);
            // let $promise = $http.post('http://' + actualFeServer + ':5000/API/change');

            $promise.then(function (msg) {
                console.log('msg:', msg);
                scope.msgtxt = 'Request for change MAIL sended';
                //$location.path('/profile');
                return true
            });
        },
        readMailChange: function(scope) {
            console.log('scope.passHash:', scope.mailHash);
            console.log('Function approveMailChange in namespace welcomeService', scope.mailHash);
            // let $promise = $http.post('http://' + actualFeServer + ':5000/API/amail', //send request with data to backEnd
            //     $http.defaults.headers.common['Authorization'] = scope.mailHash);

            let $promise = $http.get('http://' + actualFeServer + ':5000/API/wmail', scope.mailHash); //send request with data to backEnd

            $promise.then(function (msg) {
                console.log('msg:', msg);
                scope.msgtxt = 'Request for change MAIL sended';
                //$location.path('/profile');
                return true
            });

        },
        approveMailChange: function(scope) {
            console.log('scope.passHash:', scope.mailHash);
            console.log('Function approveMailChange in namespace welcomeService', scope.mailHash);

            // let $promise = $http.post('http://' + actualFeServer + ':5000/API/amail', //send request with data to backEnd
            //     $http.defaults.headers.common['Authorization'] = scope.mailHash);
            let $promise = $http.post('http://' + actualFeServer + ':5000/API/amail', scope.mailHash); //send request with data to backEnd

            $promise.then(function (msg) {
                console.log('msg:', msg);
                if (msg) {
                    if (msg.hasOwnProperty('error')) {
                        if (msg.error) {
                            if (msg.hasOwnProperty('result')) {
                                scope.msgtxt = msg.result;
                            }
                            else {
                                scope.msgtxt = 'Mail not changed !!!';
                            }
                            return false
                        }
                        else {
                            scope.msgtxt = 'MAIL was successfully changed';
                            //$location.path('/profile');
                            return true
                        }
                    }
                    else {
                        scope.msgtxt = 'Mail not changed !!!';
                        return false
                    }
                }
                else {
                    scope.msgtxt = 'Mail not changed !!!';
                    return false
                }

            });
        },
        getULogs: function (scope) {
            console.log("getULogs function in welcomeService fired");
            if(sessionService.get('token')) {
                let $promise = $http.get('http://' + actualFeServer + ':5000/API/getULogs',
                    $http.defaults.headers.common['Authorization'] = sessionService.get('token'));

                $promise.then(function (msg) {
                    console.log('msg:', msg.data.myResponse);
                    if (msg.data.myResponse.hasOwnProperty('error')) {
                        if (!msg.data.myResponse.error) {
                            if (msg.data.myResponse.hasOwnProperty('logs')) {
                                console.log('msg:', msg.data.myResponse.logs);
                                scope.logs = msg.data.myResponse.logs;
                                console.log('scope.logs:', scope.logs);
                            }
                        }
                    }
                });
            }
            else {
                return false
            }
        },
        gofb: function () {
            $location.path('/fb');
            return true
        }
    }
});