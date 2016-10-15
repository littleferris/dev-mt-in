angular.module('devMtn').controller('mainCtrl',
function($scope, $state, dataService) {

$scope.mainProfile = dataService.mainProfile;

$scope.addNewProfile = function(profile) {
  console.log(profile);
  if(profile) {
    profile.isLoggedInUser = true;
    dataService.addProfile(profile);
    console.log(profile);
    $state.go("viewProfile");
  }
}



});
// $scope.addProfile = function(profile) {
  // var profile = {
  //   name:$scope.newName,
  //   tagline:$scope.newTag,
  //   image:$scope.newImage,
  //   desc:$scope.newDesc,
  // }
  // if(dataService.addProfile(profile) ) {
  //   $scope.newName= "";
  //   $scope.newTag= "";
  //   $scope.newImage= "";
  //   $scope.newDesc= "";
  // }
//   $scope.mainProfile.push(profile);
//   console.log($scope.mainProfile);
//   $state.go("viewProfile");
// }
  // $scope.addProfile = function(profile) {
  //   dataService.addProfile(profile);
  //   $state.go('viewProfile');
  //   console.log(profile);
  // }
