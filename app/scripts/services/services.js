'use strict';

angular.module('studentApp')
  .factory('StudentsFactory', function ($firebase) {
      var url = new Firebase("https://resplendent-torch-6553.firebaseio.com/students");
      var fireRef = $firebase(url);

      var StudentService = {
        url: url,
        fireRef : fireRef,
        students: $firebase(fireRef),
        createStudent: function (studentData) {
          StudentService.students.$add(studentData);
        }
      };

      return StudentService;

    });