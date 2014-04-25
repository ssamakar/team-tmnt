'use strict';

angular.module('tmntappApp')
  .controller('MainCtrl', function ($scope, teams) {
    $scope.teams = teams;
  });
