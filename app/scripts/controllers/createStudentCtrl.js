'use strict';
/**
 * @ngdoc function
 * @name studentApp.controller:CreateStudentCtrl
 * @description
 * # CreateStudentCtrl
 * Controller of the studentApp
 */
angular.module('studentApp')
    .controller('CreateStudentCtrl', ['$scope', 'StudentsFactory', '$location',
      function ($scope, StudentsFactory, $location) {

        console.log(StudentsFactory);


        $scope.createNewStudent = function () {
          createStudent($scope.student);
          $location.path('/add-student');
        }
      }]);