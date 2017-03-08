import angular from 'angular';

// Import our modules
import {angularNavbarModule} from './modules/navbar/index';
import 'angular-ui-router';

// Import our configs
import routesConfig from './routes';

// Import our main application
import {main} from './app/main';

import './index.scss';

angular
  .module('app', [angularNavbarModule, 'ui.router'])
  .run(navbarRouteService => {
    /** @ngInject */
    navbarRouteService.setTitle('Aaronthedev blog');
    navbarRouteService.setRoutes([{
      title: 'Home',
      state: 'app',
      url: '/'
    }]);
  })
  .config(routesConfig)
  .component('app', main);
