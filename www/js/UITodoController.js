angular.module('todo.controller',[])

 .controller('UITodoController', ['$scope', '$rootScope', '$window', 'UITodoServices', '$resource',
   function ($scope, $rootScope, $window, UITodoServices, $resource){


    $scope.todos = UITodoServices.getList();

    $scope.createEvent = function() {

      if (undefined != $scope.description && $scope.description != "") {
        //$scope.todos.push(UITodoServices.createEvent($scope.description));
        //var dbValue = UITodoServices.createEvent($scope.description);
        UITodoServices.createEvent($scope.description).then(function(sucessdata){
          $scope.todos.push(sucessdata);
          $scope.description = '';
        });

      }
    }

}]);
