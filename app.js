angular.module('devMtn', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('home', {
          url:'/',
          templateUrl: "../views/home.html",
          controller:'mainCtrl'
        })
        .state('viewFriends', {
          url:'/viewFriends',
          templateUrl:"../views/viewFriends.html",
          controller:'viewFriendsCtrl'
        })
        .state('updateProfile', {
          url: '/updateProfile',
          templateUrl: '../views/updateProfile.html',
          controller:'updateProfile'
        })
        .state('viewProfile', {
          url: '/viewProfile',
          templateUrl: '../views/viewProfile.html',
          controller:'viewProfile'
        });


    $urlRouterProvider
      .otherwise('/');

});
