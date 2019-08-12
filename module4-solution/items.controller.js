(function (){
'strict use';
angular.module('data')
.controller('ItemsForCategoryController', ItemsForCategoryController);

ItemsForCategoryController.$inject=['items'];
function ItemsForCategoryController(items){
  var itemsforcategory=this;
  itemsforcategory.itemsList=items

};




})();
