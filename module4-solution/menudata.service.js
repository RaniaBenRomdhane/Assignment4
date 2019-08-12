(function (){
'strict use';
angular.module('data')
.service('MenuDataService',MenuDataService)
.constant('ApiPath',"https://davids-restaurant.herokuapp.com");


MenuDataService.$inject=['$http','ApiPath','$q','$timeout'];
function MenuDataService($http,ApiPath,$q,$timeout){
var service =this;
var categoriesTab=[];
var itemsTab =[];

service.getAllCategories = function () {
var result= $http({
  method : "GET",
  url : (ApiPath + "/categories.json")
      }).then(function(response){
  for (var i =0 ; i<(response.data).length;i++){
    categoriesTab.push(response.data[i]);
    console.log(response.data[i]);
     }
   }).catch(function(error){console.log("wrooong!");}
      );
      var deferred= $q.defer() ;
      $timeout(function(){
        deferred.resolve(categoriesTab);
      },400);
      return deferred.promise;
};






service.getItemsForCategory= function (categoryShortName){

  $http({
     method : "GET",
     url : (ApiPath +"/menu_items.json"),
     params :{
       category: categoryShortName
     }
   }).then(function(response){
     for (var j =0 ; j<(response.data).menu_items.length;j++){
       itemsTab.push(response.data.menu_items[j]);
       console.log("Hello!");
       }
       })
     .catch(function(error){console.log("wrong!");});

var deferred= $q.defer() ;
$timeout(function(){
  deferred.resolve(itemsTab);
},400);
return deferred.promise;
};
}
}


)();
