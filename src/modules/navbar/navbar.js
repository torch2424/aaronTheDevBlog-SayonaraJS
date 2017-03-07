class NavbarController {
  /** @ngInject */
  constructor($scope, $log, navbarRouteService) {
    this.$log = $log;
    this.$log.debug('hi!');
    $log.debug(navbarRouteService.getData());
  }
}
export const Navbar = {
  template: require('./navbar.html'),
  controller: NavbarController
};
