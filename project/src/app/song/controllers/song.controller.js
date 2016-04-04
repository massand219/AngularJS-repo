(function() {
  'use strict';

  angular
    .module('template')
    .controller('SongController', PlaylistController);

  /** @ngInject */
  function PlaylistController(playlist) {
    var self = this;
    self.selectedSongs = playlist.selectedSongs;
   }
   
})();