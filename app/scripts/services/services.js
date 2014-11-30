'use strict';

angular.module('studentApp')
    .factory('StudentsFactory', function ($firebase) {
      var url = "https://resplendent-torch-6553.firebaseio.com";
      var fireRef = new Firebase(url);
      var ref = $firebase(fireRef);

      var StudentService = {
        url: url,
        fireRef: fireRef,
        students: ref.$asArray(),

        createStudent: function (studentData) {
          return StudentService.students.$add(studentData);
        },
        getStudent: function (studentId) {
          return StudentService.students.$getRecord(studentId);
        },
        deleteStudent: function (studentData) {
          return StudentService.students.$remove(studentData);
        },
        updateStudent : function(studentData) {
          return StudentService.students.$save(studentData);
        }
      };

      return StudentService;
  });
