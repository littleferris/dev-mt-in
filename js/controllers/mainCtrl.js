angular.module('devMtn').controller('mainCtrl',
function($scope, dataService) {

$scope.friendsList = dataService.friendsList;


$scope.addUser = function() {
  var newUser = {
    name:$scope.newName,
    tagline:$scope.newTag,
    image:$scope.newImage,
    desc:$scope.newDesc,
  }
  if(dataService.addUser(newUser)) {
    $scope.newName= "";
    $scope.newTag= "";
    $scope.newImage= "";
    $scope.newDesc= "";
  }
  console.log($scope.friendsList);
}




});
