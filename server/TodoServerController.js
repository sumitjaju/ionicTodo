// imports
var Todo = require('./Todos');


module.exports.list = function (req, res) {
  Todo.find({}, function(err, results){
    console.log("server result from db : "+results);
    res.json(results);
  });
}

module.exports.create = function (req, res) {
  console.log("req data: "+req.body);
  var todo = new Todo(req.body);
  todo.save(function(err, result){
    res.json(result);
  });
}
