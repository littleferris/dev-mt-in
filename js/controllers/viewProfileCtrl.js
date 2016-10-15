angular.module("devMtn")
.controller("viewProfile", function($scope, $state, dataService) {

var loggedInProfile = dataService.getLoggedinUserProfile();
if(!loggedInProfile) {
  $state.go('home');
}
$scope.loggedInUserProfile = loggedInProfile;

});
