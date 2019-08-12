(function (){
'strict use';
angular.module('data')
.controller('DataController', DataController);

DataController.$inject=['mainList'];
function DataController(mainList){
  var listData=this;
  listData.categories=mainList;
  

}
})();
