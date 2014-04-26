'use strict';

angular.module('tmntappApp')
  .controller('TeamCtrl', function ($scope, team) {
  	$scope.team = team;
  });
