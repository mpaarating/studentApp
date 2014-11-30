'use strict';

/**
 * @ngdoc function
 * @name studentApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the studentApp
 */
angular.module('studentApp')
  .controller('MainCtrl', ['$scope', 'StudentsFactory', '$location',
      function ($scope, StudentsFactory, $location) {

        $scope.editStudent = function (studentId) {
          $location.path('/detail-student/' + studentId);
        };

        $scope.deleteStudent = function (studentId) {
          StudentFactory.delete({ id: studentId });
          $scope.students = StudentsFactory.query();
        };

        $scope.createNewStudent = function () {
          $location.path('/add-student');
        };

        $scope.students = StudentsFactory.students;

      }]);
