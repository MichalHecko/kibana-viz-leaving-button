define(function (require) {

  // Create an Angular module for this plugin
  var module = require('ui/modules').get('kibana-viz-leaving-button');

  // Add a controller to this module
  module.controller('LeavingButtonController', function ($scope, $rootScope, timeUnits, quickRanges, timefilter, $filter, getAppState) {

    console.log('metrics: %o', $scope.metrics);
    console.log('filter: %o', $filter);
    console.log('timeFilter: %o', timefilter);
    console.log('timeUnits: %o', timeUnits);
    console.log('quickRanges: %o', quickRanges);

    $scope.processTableGroups = function (tableGroups) {
      console.log('Start processTableGroups');
    };

    // sledovanie zmeny nastavenia casu na hlavnej liste
    $rootScope.$watchMulti([
      '$$timefilter.time.from',
      '$$timefilter.time.to'
    ], function () {
      console.log('Zmena time pickera na hlavnej liste');
    });

    // sledovanie zmeny nastavenie refreshu
    $rootScope.$watchMulti([
      '$$timefilter.refreshInterval',
      '$$timefilter.refreshInterval.pause',
      '$$timefilter.refreshInterval.value'
    ], function () {
      console.log('Zmena refreshu na hlavnej liste');
    });

    // sledovanie zmien globalneho filtra
    $scope.$watch(getAppState, function (appState) {
      $scope.state = appState;

      console.log('Filters: %o', appState.filters);
      console.log('Time: %o', appState.filters);
    });

    $scope.state = getAppState();
    $scope.$watch('state.$newFilters', function (filters) {
      console.log('filter changed: %o', filters);
      if (!filters) {
        console.log('Number of filters specified in the status bar : 0');
      } else if (filters.length === 1) {
        console.log('Number of filters specified in the status bar : 1');
      } else if (filters.length === 2) {
        console.log('Number of filters specified in the status bar : 2');
      }
    });

    $scope.leavingButtonClick = function () {
      console.log('Leaving button was clicked...');

      console.log('URL: ' + $scope.vis.params.url);
      console.log('Query: ' + JSON.stringify($scope.state.query.query_string));
      console.log('Filters: ' + JSON.stringify($scope.state.filters));
      console.log('Time from: ' + new Date(timefilter.getBounds().min));
      console.log('Time to: ' + new Date(timefilter.getBounds().max));
    };
  });

});
