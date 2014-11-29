'use strict';
/**
 * @ngdoc function
 * @name studentApp.controller:DetailStudentCtrl
 * @description
 * # DetailStudentCtrl
 * Controller of the studentApp
 */
angular.module('studentApp')
  .controller('DetailStudentCtrl', ['$scope', '$routeParams', '$location',
    function ($scope, $routeParams, $location) {
      $http.get('data/test-data.json').
          success(function(data, status, headers, config) {
            $scope.students = data;
            console.log(students);
          }).
          error(function(data, status, headers, config) {
            // log error
          });


      $scope.updateUser = function () {
        $http.update($scope.student);
        $location.path('/');
      };

      $scope.cancel = function () {
        $location.path('/');
      };

      $scope.student = StudentFactory.show({id: $routeParams.id});
    }]);