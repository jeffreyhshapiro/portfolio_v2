var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 8090;

app.use(express.static("public"));
app.use(express.static("static"));

app.use(bodyParser.urlencoded({extended: false}));

app.get("/", function(req, res) {
  res.sendFile(process.cwd() + "/views/home.html");
});

app.get("/rps", function(req, res){
  res.sendFile(process.cwd() + '/public/rps/html/RPS-style-game.html')
})

app.post('/inquiry', function(req, res){
  console.log(req.body.name);
  console.log(req.body.email);
  console.log(req.body.message);
});

app.listen(PORT, function(req, res){
  console.log('server is listening on port %s', PORT)
});