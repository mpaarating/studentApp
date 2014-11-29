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
        StudentFactory.update($scope.user);
        $location.path('/');
      };

      $scope.cancel = function () {
        $location.path('/');
      };

      $scope.user = StudentFactory.show({id: $routeParams.id});
    }]);