'use strict';

angular.module('studentApp', ['firebase'])
  .factory('StudentsFactory', function ($firebase) {
      var ref = new Firebase("https://resplendent-torch-6553.firebaseio.com/students");
      var fb = $firebase(ref);

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