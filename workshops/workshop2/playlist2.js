angular.module('myApp', ['Services'])
	.controller('mainController', function(){
		var self = this;

		self.songGenre = [
			{
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
			}
		];

		self.listSongs = [];

		self.addSongs = function(){
			self.listSongs.push({
				genre: self.songGenre.genre,
				name: self.songGenre.songs.title,
				artist: self.songGenre.songs.artist
			})
		}
	});