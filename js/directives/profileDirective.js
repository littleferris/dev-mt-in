angular.module('devMtn')
.directive("profileDirective", function() {
  return {
    templateUrl: "./js/directives/profileDirective.html",
    scope: {
      user: "="
    }
  }
});
