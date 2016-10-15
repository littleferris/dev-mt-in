angular.module("devMtn").controller('viewFriendsCtrl',
function($scope, dataService) {

$scope.friendsList = dataService.friendsList;


});
