'use strict';

angular.module('studentApp')
  .factory('StudentsFactory', function ($resource) {
    return $resource('test-data.json', {}, {
      query: { method: 'GET', isArray: true },
      create: { method: 'POST' }
    })
  })
  .factory('StudentFactory', function ($resource) {
    return $resource('test-deta.json:id', {}, {
      show: { method: 'GET' },
      update: { method: 'PUT', params: {id: '@id'} },
      delete: { method: 'DELETE', params: {id: '@id'} }
    })
  });