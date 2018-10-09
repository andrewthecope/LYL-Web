var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('public'));

var port = process.env.PORT || 8080;

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/privacy', function(req, res) {
  res.sendFile(path.join(__dirname + '/privacy.html'));
});

app.listen(port, function() {
  console.log("LYL-Web running on port " + port);
});
