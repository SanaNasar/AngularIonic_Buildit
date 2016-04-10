var app = angular.module("todoApp", []);
// implement a callback function with controller and scope
//setup the scope and call the function

app.controller("todoCtrl", function($scope) {
  //adding an array for the list of items
  $scope.todos =[];

  $scope.submitTodo = function() {
    // alert($scope.todoText);
    $scope.todos.push($scope.todoText);
  };

});