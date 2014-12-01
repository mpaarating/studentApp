'use strict';

angular.module('studentApp')
    .factory('StudentsFactory', function ($firebase) {
      var url = "https://resplendent-torch-6553.firebaseio.com";
      var ref = new Firebase(url);
      var sync = $firebase(ref);

      //Creates object to access Firebase Methods
      var StudentService = {
        url: url,
        ref: ref,
        students: sync.$asArray(),

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
          
          //Creates reference to student object with the inherited key
          var studentRef = StudentService.students.$indexFor(studentData);
          return StudentService.students.$save(studentRef);
        }

      };

      return StudentService;
  });
