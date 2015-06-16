// initialize express
var express              = require('express');
var app                  = express();
var path                 = require('path');
var bodyParser           = require('body-parser');
var mongoose             = require('mongoose');
var todoServerController = require('./TodoServerController')


// connect to db
mongoose.connect('mongodb://localhost:27017/task')

//start the server
// its a way of node to give access to environmental variables for the app
var port = process.env.PORT || 3000

app.listen(port, function() {
	console.log('ready on port '+port);
});

// declare middleware
app.use(express.static(path.join(__dirname, 'www')));

app.use(bodyParser.json());

// REST API
// routes
app.get('/api/todos',todoServerController.list);
app.post('/api/todos',todoServerController.create);
