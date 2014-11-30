'use strict';

/**
 * @ngdoc overview
 * @name studentApp
 * @description
 * # studentApp
 *
 * Main module of the application.
 */
angular
  .module('studentApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/add-student', {
        templateUrl: 'views/add-student.html',
        controller: 'CreateStudentCtrl'
      })
      .when('/detail-student/:id', {
        templateUrl: 'views/detail-student.html',
        controller: 'DetailStudentCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
