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

        //Creates detailed student view by passing through the id from Firebase
        $scope.editStudent = function (student) {
          $location.path('/detail-student/' + student.$id);
        };

        //
        $scope.deleteStudent = function (student) {
          StudentsFactory.deleteStudent(student);
        };

        $scope.createNewStudent = function () {
          $location.path('/add-student');
        };

        $scope.students = StudentsFactory.students;
      }]);
