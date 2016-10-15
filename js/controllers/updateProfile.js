angular.module("devMtn").controller("updateProfile",
function($scope, dataService) {

$scope.friendsList = dataService.friendsList;
console.log($scope.friendsList)


});
