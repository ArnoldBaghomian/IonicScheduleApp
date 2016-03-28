(function (){
  'use strict';

  angular.module('eliteApp').factory('eliteApi',[eliteApi]);

  function eliteApi(){

   var leagues = JSON.parse('[{"id":1005,"name":"5th Grade Saturday 2013-14"}]')
   var leagueData = JSON.parse('{"league":{name":"Spring Fling Tournament"}')
   
   function getLeagues(){
      return leagues;
   }

   function getLeagueData(){
      return leagueData;
   }

   return {
      getLeagues: getLeagues,
      getLeagueData: getLeaguedata
   };

  };

})();