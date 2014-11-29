'use strict';

/**
 * @ngdoc function
 * @name studentApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the studentApp
 */
angular.module('studentApp')
  .controller('MainCtrl', ['$scope', 'studentsFactory', 'studentFactory', '$location',
      function ($scope, StudentsFactory, StudentFactory, $location) {

        $scope.editStudent = function (studentId) {
          $location.path('/detail-student/' + studentId);
        };

        $scope.deleteStudent = function (studentId) {
          studentFactory.delete({ id: studentId });
          $scope.students = studentFactory.query();
        };

        $scope.createNewStudent = function () {
          $location.path('/add-student');
        };

        $scope.students = StudentsFactory.query();
      }]);
