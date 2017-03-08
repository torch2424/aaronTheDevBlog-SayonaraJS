class NavbarRouteService {
  constructor() {
    this.title = '';
    this.routes = {};
    this.activeRoute = '';
  }

  setTitle(title) {
    this.title = title;
  }

  /**
  * Json should follow the following format
    [{
      title: "Home",
      state: "home",
      url: "/home"
    },
    {
      title: "About",
      state: "about"
      url: "/about"
    }]
  */
  setRoutes(routes) {
    this.routes = routes;
  }

  getRoutes() {
    return this.routes;
  }
}

export default NavbarRouteService;
