///// Model Loader
// Loads Mongoose (MongoDB Mapper) and app models 

global.mongoose = require('mongoose');
global.Schema = require('mongoose/lib').Schema;
global.db = mongoose.createConnection('mongodb://localhost/' + database);

// Models
module.exports.Source = require('./source');
