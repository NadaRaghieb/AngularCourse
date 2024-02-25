(function() {
    'use strict';
  
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', ['$scope', function($scope) {
      $scope.lunchMenu = "";
      $scope.message = "";
  
      $scope.checkLunch = function() {
        if (!$scope.lunchMenu) {
          $scope.message = "Please enter data first";
          return;
        }
  
        // Remove empty items (", ,") before counting
        var items = $scope.lunchMenu.split(',');
        items = items.filter(function(item) {
          return item.trim() !== ""; // Check for non-empty items
        });
  
        var numberOfItems = items.length;
  
        if (numberOfItems <= 3) {
          $scope.message = "Enjoy!";
        } else if (numberOfItems <= 5) {
          $scope.message = "That is kinda lot of food!";
        } else {
          $scope.message = "Whoa, that's way too much food!";
        }
      };
    }]);
  })();