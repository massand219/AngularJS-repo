angular.module('myApp', ['Services'])
	.controller('mainController', function(user, songs){
		var self = this;
		self.songs = songs;
		self.user = user;
});