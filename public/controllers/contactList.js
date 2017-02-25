var app = angular.module('myApp', []);
app.controller('personCtrl', function($scope,$http) {
    

    var reload=function()
    {
    	 $http.get('/contactList').success(function(response){
    	    $scope.contactList=response;
    	    $scope.ob="";
   		 });

    }

    reload();
   


    $scope.addContact=function(formDetail)
    {

    	console.log(formDetail)
    	$http.post('/contactList',formDetail).success(function(response) {
    		console.log(response);
    		reload();
    	});
    }


    $scope.removeContact=function(id)
    {
    	console.log(id)
    	$http.delete('/contactList/' + id).success(function(response)
    	{
    		reload();
    	});

    }

    $scope.editContact=function(id)
    {
    	  $http.get('/contactList/' + id  ).success(function(response){
    	    $scope.ob=response;
   		 });

    }


    $scope.updateContact=function(id)
    {
    	var data=$scope.ob;
    	 $http.put('/contactList/' + id , data ).success(function(response)
    	 {
    	 	reload();

    	 });

    }

    $scope.clear=function()
    {
    	$scope.ob="";
    }


});