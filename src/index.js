import angular from 'angular';

// Import our modules
import {angularNavbarModule} from './modules/navbar/index';
import 'angular-ui-router';

// Import our configs
import routesConfig from './routes';

// Import our services
import Sayonara from './app/services/sayonara';

// Import our components
import {main} from './app/components/main/main';

import './index.scss';

angular
  .module('app', [angularNavbarModule, 'ui.router'])
  .config(routesConfig)
  .service('sayonaraService', Sayonara)
  .component('app', main)
  .run(($log, sayonaraService, navbarRouteService) => {
    /** @ngInject */
    $log.debug(sayonaraService.getSite());
    navbarRouteService.enableAlwaysDesktop();
    navbarRouteService.setTitle('Aaronthedev Blog', {
      title: 'Home',
      state: 'app',
      url: '/'
    });
  });
