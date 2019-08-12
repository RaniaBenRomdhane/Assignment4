(function(){
'use strict';

angular.module('data')
.component('items',{
  templateUrl:'showitems.html',
  bindings:{
    items :'<'
}


});

})();
