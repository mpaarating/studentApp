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
    'ngRoute',
    'firebase'
  ])
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
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

      $locationProvider.html5Mode(true);
  }]);
