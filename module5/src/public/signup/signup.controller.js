(function() {
  'use strict';

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuService', 'MyInfoService'];

function SignupController(MenuService, MyInfoService) {
  var vm = this;

  vm.info ={};

  vm.submit = function () {
    MenuService.getMenuItems(vm.info.favorite)
      .then(function (response) {
        vm.invalidFavorite = false;
        vm.submitted = true;
        MyInfoService.setInfo(vm.info);
      })
      .catch(function () {
        vm.invalidFavorite = true;
      })
  }

  vm.validateFavorite = function () {
    MenuService.getMenuItems(vm.info.favorite)
      .then(function () {
        vm.invalidFavorite = false;
      })
      .catch(function () {
        vm.invalidFavorite = true;
      })
  }
}
}());
