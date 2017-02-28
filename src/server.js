var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');

mongoose.connect('mongodb://mongo:27017/mydb'); // connect to our database

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

router.get('/', function(req, res){
    res.json({
        message: "API Root"
    });
});

app.use('/api', router);

app.listen(port);
console.log('Running on ' + port);