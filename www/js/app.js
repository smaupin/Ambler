// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('ambler', ['ionic', 'ambler.controllers']) //'ngCordova'

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
}) //closes .run

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('map', {
    url: '/',
    templateUrl: 'templates/map.html',
    controller: 'MapCtrl'
  })

  .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'HomeCtrl'
  })

  .state('view', {
    url: '/view',
    templateUrl: 'templates/view.html',
    controller: 'ViewCtrl'
  })

  .state('about', {
    url: '/about',
    templateUrl: 'templates/about.html',
    // controller: 'HomeCtrl'
  })

  .state('splash', {
    url: '/splash',
    templateUrl: 'templates/splash.html',
    controller: 'SplashCtrl'
  });

  // .state('app', {
  //   url: '/app',
  //   abstract: true,
  //   templateUrl: 'templates/menu.html',
  //   controller: 'AppCtrl'
  // })

  // .state('app.search', {
  //   url: '/search',
  //   views: {
  //     'menuContent': {
  //       templateUrl: 'templates/search.html'
  //     }
  //   }
  // })

  $urlRouterProvider.otherwise('/'); // if none of the above states are matched, use this as the fallback
}); //closes .config
