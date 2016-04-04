angular.module('template')

.service('playlist', function() {
	var self = this;
	self.selectedSongs = [];
	self.songSelector = function(songGenre){
		self.selectedSongs = [];
			for (var i = 0; i < songGenre.length; i++) {
				var currentGenre = songGenre[i];
				for (var x = 0; x < currentGenre.songs.length; x++) {
					var currentSong = currentGenre.songs[x];
					if (currentSong.selected) {
						var copy = angular.copy(currentSong);
						copy.genre = currentGenre.genre;
						self.selectedSongs.push(copy);

					}
				}
			}
			return self.selectedSongs;
	}
})


.factory('songsResource', function($resource) {
	return $resource('assets/json/musicData.json', null, {
		getSongs: {
			method: 'GET',
			isArray: true,
			headers: {
				Accept: 'application/json'
			}
		}
	});
})