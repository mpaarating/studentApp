'use strict';

angular.module('studentApp')
  .factory('StudentsFactory', function ($resource) {
    return $resource('/studentDemo/web/students', {}, {
      query: { method: 'GET', isArray: true },
      create: { method: 'POST' }
    })
  })
  .factory('StudentFactory', function ($resource) {
    return $resource('/studentDemo/web/students/:id', {}, {
      show: { method: 'GET' },
      update: { method: 'PUT', params: {id: '@id'} },
      delete: { method: 'DELETE', params: {id: '@id'} }
    })
  });