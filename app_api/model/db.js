const mongoose = require('mongoose'); 
  
var dbURI = "mongodb://0.0.0.0:27017/Food_Court"; 
const PORT =  process.env.PORT || 5000;
var gracefulShutdown;
mongoose.connect(dbURI); 
mongoose.connection.on('connected', function () { 
    console.log('Mongoose connected to ' + dbURI); 
});
mongoose.connection.on('error', function (err) { 
    console.log('Mongoose connection error: ' + err); 
});
mongoose.connection.on('disconnected', function () { 
    console.log('Mongoose disconnected'); 
}); 
require('./locations');