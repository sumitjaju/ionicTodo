var mongoose = require('mongoose');

module.exports = mongoose.model('Todos', {
  description: String
});
