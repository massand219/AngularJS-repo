(function() {
  'use strict';

  angular
    .module('template')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'ctrl',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController(UI_STATES) {
      // var vm = this;
      var self = this;
      self.uiStates = UI_STATES;
    }
  }

})();
