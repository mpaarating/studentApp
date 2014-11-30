'use strict';
/**
 * @ngdoc function
 * @name studentApp.controller:DetailStudentCtrl
 * @description
 * # DetailStudentCtrl
 * Controller of the studentApp
 */
angular.module('studentApp')
  .controller('DetailStudentCtrl', ['$scope', '$routeParams', 'StudentsFactory', '$location',
    function ($scope, $routeParams, StudentsFactory, $location) {

      $scope.updateStudent = function () {
        StudentsFactory.update($scope.student);
        $location.path('/detail-student');
      };

      $scope.cancel = function () {
        $location.path('/');
      };

      $scope.student = StudentsFactory.getStudent();
    }]);