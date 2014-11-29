'use strict';

angular.module('studentApp', ['firebase'])
  .factory('StudentsFactory', function ($firebase) {
      var ref = new Firebase("https://resplendent-torch-6553.firebaseio.com/students");
      var fb = $firebase(ref);

    return $options =  {
      query: { method: 'GET', isArray: true },
      create: { method: 'POST' },
      show: { method: 'GET' },
      update: { method: 'PUT' },
      delete: { method: 'DELETE' }
    }
  });