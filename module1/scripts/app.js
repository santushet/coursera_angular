(function() {
  'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {

  $scope.message= "";
  $scope.messageClass = "";
  $scope.dishes ="";
  $scope.inputClass ="";

  $scope.check = function () {
      $scope.message = messageForDishInput($scope.dishes);
      $scope.messageClass = classForMessage($scope.dishes);
      $scope.inputClass = classForInput($scope.dishes);
  }

  function messageForDishInput(dishes){
    if(dishes.trim() === "") {
      return "Please enter data first";
    }
    else if (numberOfDishes(dishes) <=3) {
      return "Enjoy";
    }
    else {
      return "Too much!";
    }
  }

function classForMessage(dishes) {
  if(dishes.trim() == ""){
    return "text-danger";
  }
  else {
    return "text-success";
  }
}

function classForInput(dishes) {
  if(dishes.trim() == ""){
    return "has-error";
  }
  else {
    return "has-success";
  }
}
  function numberOfDishes(dishes) {
    var items = dishes.split(",");
    var numberOfItems = 0;
    for(var i=0;i < items.length;i++){
      if(items[i].trim != ""){
        numberOfItems++;
      }
    }
    return numberOfItems;
  }
}
}());
