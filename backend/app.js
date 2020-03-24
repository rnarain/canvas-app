//import the require dependencies
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var passport = require('passport');
var studentRouter =  require('./api/student/student.router');
const { mongoDB} = require('./helperFunctions/config');


app.set('view engine', 'ejs');

//use cors to allow cross origin resource sharing
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(passport.initialize());
app.use(passport.session());

require('./helperFunctions/passport')(passport);

//Allow Access Control
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    res.setHeader('Cache-Control', 'no-cache');
    next();
  });

  //mongodb connection
const mongoose = require('mongoose');

var options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    poolSize: 500,
    bufferMaxEntries: 0
};

mongoose.connect(mongoDB, options, (err, res) => {
    if (err) {
        console.log(err);
        console.log(`MongoDB Connection Failed`);
    } else {
        console.log(`MongoDB Connected`);
    }
});




  app.use(express.json());


app.use('/api/student',studentRouter);

//start your server on port 3001
module.exports = app.listen(3001);
console.log("Server Listening on port 3001");