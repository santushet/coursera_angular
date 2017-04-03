(function() {
  'use strict';

angular.module('public')
.controller('MyinfoController', MyinfoController);

MyinfoController.$inject = ['MenuService','info'];

function MyinfoController(MenuService, info) {
  var vm =this;

  if(info){
    vm.info = info;
    MenuService.getMenuItems(info.favorite)
    .then(function (response) {
      vm.menuItem = response;
    })
    .catch(function (response) {
      console.log(response);
    })
  }
}
}());
