'use strict';


angular.module('studentApp')
    .controller('NavCtrl', function($scope, $location){

  $scope.isActive = function(path) {
    return path === $location.path();
  };
});