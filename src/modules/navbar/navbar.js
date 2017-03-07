class NavbarController {
  /** @ngInject */
  constructor($log) {
    $log.debug('hi!');
  }
}

export const navbar = {
  template: require('./navbar.html'),
  controller: NavbarController
};
