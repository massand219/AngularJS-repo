angular.module('Services', [])

.service('playlist', function() {
	var self = this;
	self.songSelector = function(songGenre){
		var selectedSongs = [];
			for (var i = 0; i < songGenre.length; i++) {
				var currentGenre = songGenre[i];
				for (var x = 0; x < currentGenre.songs.length; x++) {
					var currentSong = currentGenre.songs[x];
					if (currentSong.selected) {
						var copy = angular.copy(currentSong);
						copy.genre = currentGenre.genre;
						selectedSongs.push(copy);

					}
				}
			}
			return selectedSongs;
	}
})

.value('songs', [
{
	genre: 'Hip-Hop/Rap',
	songs: [
		{
			title: 'Dear Mama',
			artist: 'Tupac',
		},
		{
			title: 'N.Y. State of Mind',
			artist: 'Nas'
		},
		{
			title: '99 Problems', 
			artist: 'Jay-Z'
		}
	]
},
{
	genre: 'RnB',
	songs: [
		{
			title: 'Say Goodbye',
			artist: 'Chris Brown'
		},
		{
			title: '4 Page Letter',
			artist: 'Aaliyah'
		},
		{
			title: 'Say My Name',
			artist: 'Destiny\'s Child'

		}
	] 
},
{
	genre: 'Pop',
	songs: [
		{
			title: 'Disturbia',
			artist: 'Rihanna'
		},
		{
			title: 'Hollaback Girl',
			artist: 'Gwen Stefani'
		},
		{
			title: 'Someone Like You',
			artist: 'Adele'
		}
	]
}]);
