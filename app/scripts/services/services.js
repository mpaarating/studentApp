'use strict';

angular.module('studentApp')
  .factory('StudentsFactory', function ($resource) {
    return $resource('test-data.json', {}, {
      query: { method: 'GET', isArray: true },
      create: { method: 'POST' }
    })
  })
  .factory('StudentFactory', function ($resource) {
    return $resource('test-student.json', {}, {
      show: { method: 'GET' },
      update: { method: 'PUT' },
      delete: { method: 'DELETE' }
    })
  });