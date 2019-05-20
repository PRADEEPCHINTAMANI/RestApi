var express = require('express');
var app = express();
var fs = require("fs");
var id = 3;
var user = {
   "user4" : {
      "name" : "rama",
      "password" : "password4",
      "profession" : "usern",
      "id": 4
   }
}

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "user.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})
app.post('/addUser', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "user.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      data["user4"] = user["user4"];
      console.log( data );
      res.end( JSON.stringify(data));
   });
})


app.delete('/deleteUser', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      delete data["user" + 2];
       
      console.log( data );
      res.end( JSON.stringify(data));
   });
})
var server = app.listen(80,function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})