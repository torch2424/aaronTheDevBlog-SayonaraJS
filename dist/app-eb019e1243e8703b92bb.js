webpackJsonp([0],[,,function(module,exports){},function(module,exports,__webpack_require__){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),EntryController=function(){function EntryController($log,$timeout,$state,$stateParams,$sce,sayonaraService){_classCallCheck(this,EntryController),this.$log=$log,this.$timeout=$timeout,this.$state=$state,this.$stateParams=$stateParams,this.$sce=$sce,this.sayonaraService=sayonaraService,this.entry={}}return EntryController.$inject=["$log","$timeout","$state","$stateParams","$sce","sayonaraService"],_createClass(EntryController,[{key:"$onInit",value:function $onInit(){var _this=this;this.sayonaraService.getSite().then(function(siteJson){siteJson.pages[0].entryTypes[0].entries.some(function(entry){return entry.title===_this.$stateParams.title&&(_this.entry=entry,!0)})||(_this.entry={title:"Entry not found.."})})}},{key:"goBackHome",value:function goBackHome(){this.$state.go("app")}}]),EntryController}(),entry=exports.entry={template:__webpack_require__(9),controller:EntryController}},function(module,exports,__webpack_require__){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),MainController=function(){function MainController($log,$timeout,$sce,$location,sayonaraService){_classCallCheck(this,MainController),this.$log=$log,this.$timeout=$timeout,this.$sce=$sce,this.$location=$location,this.sayonaraService=sayonaraService,this.sayonaraSite={}}return MainController.$inject=["$log","$timeout","$sce","$location","sayonaraService"],_createClass(MainController,[{key:"$onInit",value:function $onInit(){var _this=this;this.sayonaraService.getSite().then(function(siteJson){_this.$timeout(function(){_this.sayonaraSite=siteJson},0)})}},{key:"goToEntry",value:function goToEntry(entry){this.$location.path("/entry/"+entry.title)}}]),MainController}(),main=exports.main={template:__webpack_require__(10),controller:MainController}},function(module,exports,__webpack_require__){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),Sayonara=function(){function Sayonara($log,$http){var _this=this;_classCallCheck(this,Sayonara),this.$log=$log,this.$http=$http,this.sayonaraPromise={},this.sayonaraSite={};var sayonaraUrlHost="";sayonaraUrlHost="//"+this.document.location.host,this.sayonaraPromise=this.$http({method:"GET",url:sayonaraUrlHost+"/api/public"}).then(function(response){_this.$log.debug("Sayonara Response: ",response.data),_this.sayonaraSite=response.data},function(response){_this.$log.error("Sayonara Error: ",response)})}return Sayonara.$inject=["$log","$http"],_createClass(Sayonara,[{key:"getSite",value:function getSite(){var _this2=this;return new Promise(function(resolve){Object.keys(_this2.sayonaraSite)>0&&resolve(_this2.sayonaraSite),_this2.sayonaraPromise.then(function(){resolve(_this2.sayonaraSite)})})}}]),Sayonara}();exports.default=Sayonara},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.angularNavbarModule=void 0;var _angular=__webpack_require__(0),_angular2=_interopRequireDefault(_angular),_navbarRoute=__webpack_require__(13),_navbarRoute2=_interopRequireDefault(_navbarRoute),_navbar=__webpack_require__(12),angularNavbarModule=exports.angularNavbarModule="angularNav";_angular2.default.module(angularNavbarModule,[]).service("navbarRouteService",_navbarRoute2.default).component("angularNav",_navbar.Navbar)},function(module,exports,__webpack_require__){"use strict";function routesConfig($stateProvider,$urlRouterProvider,$locationProvider){$locationProvider.html5Mode(!0).hashPrefix(""),$urlRouterProvider.otherwise("/"),$stateProvider.state("app",{url:"/",component:"app"}).state("entry",{url:"/entry/:title",component:"entry"})}routesConfig.$inject=["$stateProvider","$urlRouterProvider","$locationProvider"],Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=routesConfig},,function(module,exports){module.exports='<div class="c-entry">\n    <div class="c-entry__entry__title-container">\n      <h1 class="c-entry__entry__title-container__title">\n        {{$ctrl.entry.title}}\n      </h1>\n    </div>\n\n    <div class="c-entry__entry__content animated fadeIn"\n      ng-bind-html="$ctrl.$sce.trustAsHtml($ctrl.entry.content)">\n    </div>\n\n    <div class="c-entry__entry__back-container">\n      <div class="c-entry__entry__back-container__back"\n        ng-click="$ctrl.goBackHome()">\n        << Back\n      </div>\n    </div>\n</div>\n'},function(module,exports){module.exports='<div class="c-main">\n\n  <div class="c-main__page-content"\n    ng-bind-html="$ctrl.$sce.trustAsHtml($ctrl.sayonaraSite.pages[0].content)">\n  </div>\n\n\n  <div class="c-main__entry"\n    ng-repeat="entry in $ctrl.sayonaraSite.pages[0].entryTypes[0].entries | orderBy: \'-order\'">\n    <div class="c-main__entry__title-container">\n      <h1 class="c-main__entry__title-container__title"\n        ng-click="$ctrl.goToEntry(entry)">\n        {{entry.title}}\n      </h1>\n    </div>\n\n    <div class="c-main__entry__content animated fadeIn"\n      ng-bind-html="$ctrl.$sce.trustAsHtml(entry.content)">\n    </div>\n\n    <div class="c-main__entry__divider">\n    </div>\n\n    <div class="c-main__entry__date">\n      {{entry.date | date:\'longDate\'}}\n      {{entry.date | date:\'medium\'}}\n    </div>\n\n    <div class="c-main__entry__read-more"\n      ng-click="$ctrl.goToEntry(entry)">\n      Read more...\n    </div>\n  </div>\n</div>\n'},function(module,exports){module.exports='<div class="angular-navbar">\n  <!-- Desktop Horizontal Navbar -->\n  <div class="angular-navbar__desktop"\n    ng-class="{\'angular-navbar__desktop--always-show\':\n      $ctrl.navbarRouteService.alwaysDesktop,\n      \'angular-navbar__desktop--always-hide\':\n        $ctrl.navbarRouteService.alwaysMobile}">\n    <!-- Title -->\n    <div ng-if="$ctrl.navbarRouteService.title &&\n      !$ctrl.navbarRouteService.titleRoute"\n      class="angular-navbar__desktop__title">\n      {{$ctrl.navbarRouteService.title}}\n    </div>\n\n    <!-- Title Route -->\n    <div ng-if="$ctrl.navbarRouteService.titleRoute"\n      class="angular-navbar__desktop__title--route"\n      ng-click="$ctrl.goToState($ctrl.navbarRouteService.titleRoute)">\n      {{$ctrl.navbarRouteService.title}}\n    </div>\n\n    <ul class="angular-navbar__desktop__list">\n      <li ng-repeat="route in $ctrl.navbarRouteService.getRoutes()"\n        ng-click="$ctrl.goToState(route)"\n        class="angular-navbar__desktop__list__item"\n        ng-class="{\'angular-navbar__desktop__list__item--active\': $ctrl.isActive(route)}">\n        {{route.title}}\n      </li>\n    </ul>\n  </div>\n\n  <!-- Mobile Sidenav bar -->\n  <div class="angular-navbar__mobile"\n  ng-class="{\'angular-navbar__mobile--always-show\':\n    $ctrl.navbarRouteService.alwaysMobile,\n    \'angular-navbar__mobile--always-hide\':\n      $ctrl.navbarRouteService.alwaysDesktop}">\n\n    <!-- Hamburger menu button -->\n    <div class="angular-navbar__mobile__hamburger"\n      ng-click="$ctrl.showNav = true">\n      <div class="angular-navbar__mobile__hamburger__bar">\n      </div>\n      <div class="angular-navbar__mobile__hamburger__bar">\n      </div>\n      <div class="angular-navbar__mobile__hamburger__bar">\n      </div>\n    </div>\n\n    <!-- Semi Transparent background -->\n    <div class="angular-navbar__mobile__shade"\n      ng-class="{\'angular-navbar__mobile__shade--nav-active\': $ctrl.showNav}"\n      ng-click="$ctrl.showNav = false">\n    </div>\n\n    <!-- Sidenav that slides in -->\n    <div class="angular-navbar__mobile__sidenav"\n      ng-class="{\'angular-navbar__mobile__sidenav--nav-active\': $ctrl.showNav}">\n\n      <!-- Title -->\n      <div ng-if="$ctrl.navbarRouteService.title &&\n        !$ctrl.navbarRouteService.titleRoute"\n        class="angular-navbar__mobile__sidenav__title">\n        {{$ctrl.navbarRouteService.title}}\n      </div>\n\n      <!-- Title Route -->\n      <div ng-if="$ctrl.navbarRouteService.titleRoute"\n        class="angular-navbar__mobile__sidenav__title--route"\n        ng-click="$ctrl.goToState($ctrl.navbarRouteService.titleRoute)">\n        {{$ctrl.navbarRouteService.title}}\n      </div>\n\n      <ul class="angular-navbar__mobile__sidenav__list">\n        <li ng-repeat="route in $ctrl.navbarRouteService.getRoutes()"\n          ng-click="$ctrl.goToState(route)"\n          class="angular-navbar__mobile__sidenav__list__item"\n          ng-class="{\'angular-navbar__mobile__sidenav__list__item--active\': $ctrl.isActive(route)}">\n          {{route.title}}\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n'},function(module,exports,__webpack_require__){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),NavbarController=function(){function NavbarController($log,$state,$location,navbarRouteService){_classCallCheck(this,NavbarController),this.$log=$log,this.$state=$state,this.$location=$location,this.navbarRouteService=navbarRouteService,this.showNav=!1}return NavbarController.$inject=["$log","$state","$location","navbarRouteService"],_createClass(NavbarController,[{key:"isActive",value:function isActive(route){return route.state?this.$state.includes(route.state):route.url?this.$location.path().includes(route.state):(this.$log.err("Angular Navbar: Route object must contain a 'state' or 'url' key"),!1)}},{key:"goToState",value:function goToState(route){route.state?this.$state.go(route.state):route.url&&this.$location.path(route.url),this.showNav=!1}}]),NavbarController}(),Navbar=exports.Navbar={template:__webpack_require__(11),controller:NavbarController}},function(module,exports,__webpack_require__){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),NavbarRouteService=function(){function NavbarRouteService(){_classCallCheck(this,NavbarRouteService),this.title="",this.titleRoute={},this.routes={},this.activeRoute="",this.alwaysDesktop=!1,this.alwaysMobile=!1}return _createClass(NavbarRouteService,[{key:"setRoutes",value:function setRoutes(routes){this.routes=routes}},{key:"setTitle",value:function setTitle(title,route){this.title=title,route&&(this.titleRoute=route)}},{key:"getRoutes",value:function getRoutes(){return this.routes}},{key:"enableAlwaysDesktop",value:function enableAlwaysDesktop(){this.alwaysDesktop=!0,this.alwaysMobile=!1}},{key:"enableAlwaysMobile",value:function enableAlwaysMobile(){this.alwaysDesktop=!1,this.alwaysMobile=!0}}]),NavbarRouteService}();exports.default=NavbarRouteService},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var _angular=__webpack_require__(0),_angular2=_interopRequireDefault(_angular),_index=__webpack_require__(6);__webpack_require__(1);var _routes=__webpack_require__(7),_routes2=_interopRequireDefault(_routes),_sayonara=__webpack_require__(5),_sayonara2=_interopRequireDefault(_sayonara),_main=__webpack_require__(4),_entry=__webpack_require__(3);__webpack_require__(2),_angular2.default.module("app",[_index.angularNavbarModule,"ui.router"]).config(_routes2.default).service("sayonaraService",_sayonara2.default).run(function($log,$timeout,sayonaraService,navbarRouteService){sayonaraService.getSite().then(function(response){$timeout(function(){navbarRouteService.setTitle(response.siteName,{title:"Home",state:"app",url:"/"})},0)}),navbarRouteService.enableAlwaysDesktop()}).component("app",_main.main).component("entry",_entry.entry)}],[14]);