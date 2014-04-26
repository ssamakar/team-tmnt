'use strict';

angular.module('tmntappApp')
  .service('TurtleService', function TurtleService($q, $http) {
  	return {
  		getTeams: function() {
  		  var deferred = $q.defer();
  	
  		  $http({method: 'GET', url: 'http://tmnt.devmounta.in/team'}).success(function(data) {
  		      deferred.resolve(data);
  		    }
  		  );
  		  return deferred.promise;
  		},
  		getTeam: function(teamId) {
  		  var deferred = $q.defer();

		  $http({method: 'GET', url: 'http://tmnt.devmounta.in/team/' + teamId}).success(function(data) {
		      deferred.resolve(data[0]);
		  	}
		  );  
  		  return deferred.promise;
  		}
  	}
});