import angular from 'angular';

import {navbar} from './navbar';

export const angularNavbarModule = 'angular-nav';

angular
  .module(angularNavbarModule, [])
  .component('angularNav', navbar);
