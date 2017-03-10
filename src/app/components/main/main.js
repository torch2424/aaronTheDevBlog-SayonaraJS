class MainController {
  /** @ngInject */
  constructor($log, $timeout, $sce, sayonaraService) {
    this.$log = $log;
    this.$timeout = $timeout;
    this.$sce = $sce;
    this.sayonaraService = sayonaraService;

    this.sayonaraSite = {};
  }

  $onInit() {
    this.sayonaraService.getSite().then(siteJson => {
      // Using timeout to propogate controller changes
      this.$timeout(() => {
        this.sayonaraSite = siteJson;
      }, 0);
    });
  }
}

export const main = {
  template: require('./main.html'),
  controller: MainController
};
