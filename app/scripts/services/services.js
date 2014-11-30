'use strict';

angular.module('studentApp')
    .factory('StudentsFactory', function ($firebase) {
      var url = "https://resplendent-torch-6553.firebaseio.com/students";
      var fireRef = new Firebase(url);
      var ref = $firebase(fireRef);

      var StudentService = {
        url: url,
        fireRef: fireRef,
        students: ref.$asArray(),
        createStudent: function (studentData) {
          StudentService.students.$add(studentData);
        },
        getStudent: function (studentData) {
          return StudentService.students.$getRecord(studentData);
        },
        deleteStudent: function (studentData) {

        }
      };

      return StudentService;
  });
