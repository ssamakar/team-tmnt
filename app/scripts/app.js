'use strict';

var app = angular.module('tmntappApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

$stateProvider
    .state('main', {
      url: "/",
      templateUrl: "views/main.html",
      controller: 'MainCtrl',
      resolve: {
		  teams: function(TurtleService) {
		    return TurtleService.getTeams();
		  }
		} 
    })
    .state('team', {
      url: "/team/:teamId",
      templateUrl: "views/team.html",
      controller: 'TeamCtrl'
    })
});