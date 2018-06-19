const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const config = require('./config');
const fs = require('fs');
var distance = require('google-distance');
var User = require('./models/user');
//init App
const app            = express();

app.set('view engine', 'ejs');
app.use('/static', express.static(__dirname +'/static'));

//Home route.
app.get('/',function (req,res) {
    distance.get(
        {
          origin: 'Patna',
          destination: 'Allahabad'
        },
        function(err, data) {
          if (err) return console.log(err);
          res.send(data.distance);
      });
  });
  //start server
app.listen(8080,function () {
	console.log('App listening on port 8080!');
});