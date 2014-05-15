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
      controller: 'TeamCtrl',
      resolve: {
		  team: function(TurtleService, $stateParams) {
		    return TurtleService.getTeam($stateParams.teamId);
		  }
		} 
    })
	    .state('team.character', {
	      url: "/character/:charid",
	      templateUrl: "views/team.character.html",
	      controller: 'CharacterCtrl',
	      resolve: {
			  character: function(TurtleService) {
			    return TurtleService.getCharacter();
			  }
			} 
	     })

});