(function (){
  'use strict';

  angular.module('eliteApp').controller('LocationsCtrl',['eliteApi',LocationsCtrl]);

  function LocationsCtrl($state, eliteApi){
    var vm = this;

    var data = eliteApi.getLeagueData();
    vm.locations = data.locations;


  };
})();