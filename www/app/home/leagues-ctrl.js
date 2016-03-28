(function (){
  'use strict';

  angular.module('eliteApp').controller('LeaguesCtrl',['eliteApi',LeaguesCtrl]);

  function LeaguesCtrl($state, eliteApi){
    var vm = this;

    var leagues = eliteApi.getLeagues();
    vm.leagues = leagues;

    vm.selectLeague = function(leagueId){

      $state.go("app.teams");

    };

  };

})();