class MainController {
  /** @ngInject */
  constructor($scope, $log) {
    this.$scope = $scope;
    this.$log = $log;
  }
}

export const main = {
  template: require('./main.html'),
  controller: MainController
};
