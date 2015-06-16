
angular.module('todo.services',[])
.factory ('UITodoServices', function($resource, $q){

  var baseURL = "http://localhost:3000/";
  var todo = $resource(baseURL + 'api/todos');
  var todoTask = [];

  var todoTask = function() {
    return todo.query(function(results){
      console.log("results: "+results);
      todoTask = results;
    });
  }

  return {
    getList: function () {
      console.log("service called");
      return todoTask();
    },
    createEvent : function(description) {
      var deferred = $q.defer();
      var todObj = new todo();
      todObj.description = description;
      todObj.$save(function (result){
        deferred.resolve(result);
      });
      return deferred.promise;
    }
  };


});
