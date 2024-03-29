// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
//angular.module('starter', ['ionic', 'starter.services'])
angular.module('tables', ['ionic', 'tables.controllers' ])


.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    .state('tab.select', {
      url: '/selectTable',
      views: {
        'select-tab': {
          templateUrl: 'templates/select.html'
        }
      }
    })

    .state('tab.learn', {
      url: '/learnTable/{practice}',
      views: {
        'select-tab': {
          templateUrl: 'templates/learn.html'
        }
      }
    })	
	
    .state('tab.practice', {
      url: '/practiceTable/{practice}',
      views: {
        'select-tab': {
          templateUrl: 'templates/practice.html'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/selectTable');

});

