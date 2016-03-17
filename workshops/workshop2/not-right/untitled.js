angular.module('MyApp')

.factory('SelectToAdd', function(GENRES){
	function SelectToAdd() {
		this.genres = GENRES;
		this.genreSelected = this.genres[0];
		this.songSelected = [];
	}

	SelectToAdd.prototype.addSongs = function(song) {
		if (song.selected) {
			this.songSelected.push(song);
		} else {
			for(var i = 0; i < this.songSelected.length; i++) {
				if (this.songSelected[i].title === song.title) {
					this.songSelected.splice(i , 1);
					break;
				}
			}
		}
	};
})

.value('GENRES',[{
		genre: 'Hip-Hop/Rap',
		songs: [
			{
				title: 'Dear Mama',
				artist: 'Tupac'
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
	}]
]);

// .value('songs', [
// 	{
// 		genre: 'Hip-Hop/Rap',
// 		name: 'Dear Mama',
// 		artist: 'Tupac'
// 	},
// 	{
// 		genre: 'Hip-Hop/Rap',
// 		name: 'N.Y. State of Mind',
// 		artist: 'Nas'
// 	},
// 	{
// 		genre: 'Hip-Hop/Rap',
// 		name: '99 Problems',
// 		artist: "Jay-Z"
// 	},
// 	{
// 		genre: 'RnB',
// 		name: 'Say Goodbye',
// 		artist: 'Chris Brown'
// 	},
// 	{
// 		genre: 'RnB',
// 		name: '4 Page Letter',
// 		artist: 'Aaliyah'
// 	},
// 	{
// 		genre: 'RnB',
// 		name: 'Say My Name',
// 		artist: 'Destiny\'s Child'
// 	},
// 	{
// 		genre: 'Pop',
// 		name: 'Disturbia',
// 		artist: 'Rihanna'
// 	},
// 	{
// 		genre: 'Pop',
// 		name: 'Hollaback Girl',
// 		artist: 'Gwen Stefani'
// 	},
// 	{
// 		genre: 'Pop',
// 		name: 'Someone Like You',
// 		artist: 'Adele'
// 	}


// 	])

// .factory('playlistCreator', function() {
// 	var self = this;


// })