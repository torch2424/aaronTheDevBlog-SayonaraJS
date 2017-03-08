class NavbarController {
  /** @ngInject */
  constructor($scope, $log, navbarRouteService) {
    this.$scope = $scope;
    this.$log = $log;
    this.navbarRouteService = navbarRouteService;
  }
}
export const Navbar = {
  template: require('./navbar.html'),
  controller: NavbarController
};
