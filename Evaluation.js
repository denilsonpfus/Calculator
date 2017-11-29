var express = require('express');
//var path = require('path');
var http = require('http');
var app = express();
//var cors = require('cors');

//app.use(cors({origin: 'null'}));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:9000');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:32770');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Origin', 'null');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});



// Define the port to run on
app.listen(9000);
console.log('Listening to port 9000');
var pho = eval('3+5');
console.log(pho);

// Entry point - index.html landing page
//app.use(express.static(path.join(__dirname)));

//Listen for requests
app.get('/', function(req, res){
    res.type('text/plain');
//    res.send('55555');
//http.createServer(function(req, res){
//    var eval_data = eval('3+5');
//var x = req;
//var y = '2';
//var eval_data = x + y;
    req.on('data', function (data) {
//       eval_data = eval('3+5');
//     var equals = eval(req);
        res.send('1'+ data);
    });
    req.on('end', function() {
        res.send('2' + data);
      });
});
    
