var express = require('express');
var app = express();

var cors = require('cors');
app.use(cors());

// indicate port for EXPRESS to listen to...
app.listen(9000);

// test data
console.log('Listening to port 9000'); var pho = eval('3+5'); console.log('Test ----> ' + pho +  '\nCALCULATOR ON!!!!');

// '/xxx is the end point from client javascript call'
app.post('/', function(req, res){
//   res.type('text/plain');
var data = '';
    req.on('data', function (chain) {
        data += chain;
    });

    req.on('end', function() {
        var result = eval(data);

  // EXPRESS does NOT accept integers. ONLY: Buffer object, Object, Array, or String
        res.send(String(result));
        console.log(result);
        // kill EXPRESS after one operation
  //      app.close();
      });
});
    
