(function (){
'strict use';
angular.module('data')
.service('MenuDataService',MenuDataService)
.constant('ApiPath',"https://davids-restaurant.herokuapp.com");


MenuDataService.$inject=['$http','ApiPath','$q','$timeout'];
function MenuDataService($http,ApiPath,$q,$timeout){
var service =this;
//var categoriesTab=[];
//var itemsTab =[];

service.getAllCategories = function () {
return $http({
  method : "GET",
  url : (ApiPath + "/categories.json")
      }).then(function(response){

    return response.data;

   }).catch(function(error){console.log("wrooong!");}
      );

};






service.getItemsForCategory= function (categoryShortName){

return  $http({
     method : "GET",
     url : (ApiPath +"/menu_items.json"),
     params :{
       category: categoryShortName
     }
   }).then(function(response){

       return response.data.menu_items;
       console.log("Hello!");

       })
     .catch(function(error){console.log("wrong!");});


};
}
}


)();
