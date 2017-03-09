class NavbarController {
  /** @ngInject */
  constructor($scope, $log, $state, navbarRouteService) {
    this.$scope = $scope;
    this.$log = $log;
    this.$state = $state;
    this.navbarRouteService = navbarRouteService;
    this.showNav = false;
  }

  // Check if a route is active
  isActive(route) {
    return this.$state.includes(route.state);
  }

  // Go to a State
  goToState(route) {
    this.$state.go(route.state);
    this.showNav = false;
  }
}
export const Navbar = {
  template: require('./navbar.html'),
  controller: NavbarController
};
