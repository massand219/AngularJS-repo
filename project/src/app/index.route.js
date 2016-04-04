(function() {
  'use strict';

  angular
    .module('template')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, UI_STATES) {
    $stateProvider
      .state(UI_STATES.HOME, {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'ctrl'
      })

      .state(UI_STATES.PLAYLIST, {
        url: '/playlist',
        templateUrl: 'app/playlist/partials/playlist.main.html',
        controller: 'PlaylistController',
        controllerAs: 'ctrl'
      })

      .state(UI_STATES.SONG, {
        url: '/song-info',
        templateUrl: 'app/song/partials/song.main.html',
        controller: 'SongController',
        controllerAs: 'ctrl'
      });

      // .state('song-info', {
      //   url: '/song-info',
      //   templateUrl: 'assets/json/54e2660727c126a2f862999a/songs.json',
      //   controller: 'SongInfoController',
      //   controllerAs: 'ctrl'
      // });

    $urlRouterProvider.otherwise('/');
  }

})();
