'use strict';

/**
 * @ngdoc function
 * @name studentApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the studentApp
 */
angular.module('studentApp')
  .controller('MainCtrl', ['$scope', '$http', '$location',
      function ($scope, $http, $location) {
        $http.get('test-data.json').
            success(function(data, status, headers, config) {
              console.log(data);
              $scope.students = data;
            }).
            error(function(data, status, headers, config) {
              // log error
            });

        /*$scope.editStudent = function (studentId) {
          $location.path('/detail-student/' + studentId);
        };

        $scope.deleteStudent = function (studentId) {
          studentFactory.delete({ id: studentId });
          $scope.students = studentFactory.query();
        };

        $scope.createNewStudent = function () {
          $location.path('/add-student');
        };*/

      }]);
