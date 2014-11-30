'use strict';

angular.module('studentApp')
  .factory('StudentsFactory', function ($firebase) {
      var url = "https://resplendent-torch-6553.firebaseio.com/students";
      var fireRef = new Firebase(url);

      var StudentService = {
        url: url,
        fireRef : fireRef,
        students: $firebase(fireRef).$asArray(),
        createStudent: function (studentData) {
          StudentService.students.$add(studentData);
        },
        deleteStudent: function (studentData) {

        }
      };

      return StudentService;

    });