(function() {
  'use strict';

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuService', 'MyInfoService'];

function SignupController(MenuService, MyInfoService) {
  var vm = this;

  vm.info ={};

  vm.submit = function () {
    MenuService.getMenuItem(vm.info.favorite)
      .then(function (response) {
        MyInfoService.setInfo(vm.info);
        vm.success = true;
        vm.error =false;

      })
      .catch(function () {
        vm.error = true;
        vm.success =false;
      })
  }

}
}());
