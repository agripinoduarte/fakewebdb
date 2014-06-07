///// Model Loader
// Loads Mongoose (MongoDB Mapper) and app models 
mongodb_uri = process.env.MONGOSOUP_URL

global.mongoose = require('mongoose');
global.Schema = require('mongoose/lib').Schema;
global.db = mongoose.createConnection(mongodb_uri + '/' + database);

// Models
module.exports.Source = require('./source');
