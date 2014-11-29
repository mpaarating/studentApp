'use strict';
/**
 * @ngdoc function
 * @name studentApp.controller:CreateStudentCtrl
 * @description
 * # CreateStudentCtrl
 * Controller of the studentApp
 */
angular.module('studentApp')
  .controller('CreateStudentCtrl', ['$scope', '$http', '$location',
    function ($scope, $http, $location) {

      $scope.createNewStudent = function () {
        $http.create($scope.student);
        $location.path('/');
      }
    }]);