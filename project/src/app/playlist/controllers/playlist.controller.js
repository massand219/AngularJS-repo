(function() {
  'use strict';

  angular
    .module('template')
    .controller('PlaylistController', PlaylistController);

  /** @ngInject */
  function PlaylistController(playlist) {
    var self = this;
    self.selectedSongs = playlist.selectedSongs;
   }

   
})();