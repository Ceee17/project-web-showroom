angular.module('myApp', [])
.controller('LoginController', function($scope) {
  $scope.username = "";
  $scope.password = "";
  $scope.errorMessage = "";

  $scope.login = function() {
    if ($scope.username === "user" && $scope.password === "password") {
      window.location.href = "homepage.html";
    } else {
      $scope.errorMessage = "Incorrect username or password";
    }
  };
});

