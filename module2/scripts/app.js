(function() {
  'use strict';

angular
  .module('ShoppingListCheckOff',[])
  .controller('ToBuyShoppingController', ToBuyShoppingController)
  .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];

function ToBuyShoppingController(ShoppingListCheckOffService) {
  var vm = this;

  vm.toBuyItems = ShoppingListCheckOffService.getToBuyItems();

  vm.doBuy = function(index) {
    ShoppingListCheckOffService.doBuy(index);
  }
}


AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];

function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
  var vm = this;

  vm.alreadyBoughtItems = ShoppingListCheckOffService.getAlreadyBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  var toBuyItems =  [
      { name: "cookies", quantity: 10 },
      { name: "milk", quantity: 10 },
      { name: "tea", quantity: 10 },
      { name: "coffee", quantity: 10 },
      { name: "sugar", quantity: 10 }
    ];

  var alreadyBoughtItems = [];

  service.getToBuyItems = function() {
    return toBuyItems;
  }

  service.getAlreadyBoughtItems = function () {
    return alreadyBoughtItems;
  }

  service.doBuy = function(index) {
    alreadyBoughtItems.push(toBuyItems[index]);
    toBuyItems.splice(index, 1);
  }
}

}());
