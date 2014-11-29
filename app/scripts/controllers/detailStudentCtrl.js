'use strict';
/**
 * @ngdoc function
 * @name studentApp.controller:DetailStudentCtrl
 * @description
 * # DetailStudentCtrl
 * Controller of the studentApp
 */
angular.module('studentApp')
  .controller('DetailStudentCtrl', ['$scope', '$routeParams', 'StudentFactory', '$location',
    function ($scope, $routeParams, StudentFactory, $location) {

      $scope.updateUser = function () {
        StudentFactory.update($scope.student);
        $location.path('/detail-student');
      };

      $scope.cancel = function () {
        $location.path('/');
      };

      $scope.student = StudentFactory.show({id: $routeParams.id});
    }]);