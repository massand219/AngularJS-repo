(function() {
  'use strict';

  angular
    .module('template')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(songsResource, playlist) {
    var self = this;

    songsResource.getSongs({
    	page: 2,
    	searchBy: 'genre',
    	searchVal: 'Hip-Hop'
    })
    .$promise
    .then(function onSuccess(songGenre){
    	self.songGenre = songGenre;
    }, function onError(errorResponse){
    	console.log(errorResponse)
    });

    // self.songGenre = songs;

    self.showSongs = function() {
    	self.selectedSongs = playlist.songSelector(self.songGenre)
    };

    self.onSubmit = function() {
      if (self.myForm.$valid) {
        console.log('form submmitted')
      }

      self.userInfo = [];
    };

    self.add = function(){
      self.user = {
        userName: self.userName,
        userAge: self.userAge
      }
    };

    // self.greeting = "Hello World";
  }

   
})();
