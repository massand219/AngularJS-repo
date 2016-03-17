angular.module('myApp', ['Services'])
	.controller('mainController', function(songs, playlist){
		var self = this;

		self.songGenre = songs;

		self.showSongs = function() {
			self.selectedSongs = playlist.songSelector(self.songGenre)
		}
	});