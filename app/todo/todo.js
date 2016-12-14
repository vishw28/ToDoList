'use strict';

angular.module('myApp.todo', ['ngRoute','firebase'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/todo', {
    templateUrl: 'todo/todo.html',
    controller: 'TodoController',
    controllerAs:'tc'
  });
}])

.controller('TodoController',['$firebaseArray',function($firebaseArray) {

    var tc = this;
    var ref = firebase.database().ref().child('todo');
    tc.todos = $firebaseArray(ref);
    console.log(tc.todos);

          tc.tasks=[];

          tc.addTask = function () {
                tc.showAddTask = true;
          }

          tc.add = function () {
            ref.push(tc.tasks);
          }
          
          tc.removeTask = function (t) {
              ref.child(t.$id).remove();
          }

}]);