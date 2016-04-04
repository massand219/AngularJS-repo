(function() {
  'use strict';

  angular
    .module('template')




    .directive('playlistName', function() {
    	return {
    		templateUrl: 'app/main/playlistName.html',
    		controller: 'PlaylistNameController',
    		controllerAs: 'ctrl',
    		scope: true
    	};
    })
    .controller('PlaylistNameController', function() {
    	var self = this;
    })

    .directive('infoName', function() {
        return {
            templateUrl: 'app/main/infoName.html',
            controller: 'InfoNameController',
            controllerAs: 'ctrl',
            scope: true
        };
    })
    .controller('InfoNameController', function() {
        var self = this;
    })

    .directive('genreName', function() {
        return {
            templateUrl: 'app/main/genreName.html',
            controller: 'GenreNameController',
            controllerAs: 'ctrl',
            scope: true
        };
    })
    .controller('GenreNameController', function() {
        var self = this;
    })

    .directive('songOfName', function() {
        return {
            templateUrl: 'app/main/songOfName.html',
            controller: 'SongOfNameController',
            controllerAs: 'ctrl',
            scope: true
        };
    })
    .controller('SongOfNameController', function() {
        var self = this;
    })

})();
