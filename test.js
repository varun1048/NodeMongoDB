const express = require('express')
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
let app = express()
MongoClient.connect(url,{useUnifiedTopology: true}, function(err, db) {
  if (err) throw err;
  var dbo = db.db("varundb");
  dbo.collection("customers").find({},{projection:{_id:0}}).toArray(function(err, result) {
    if (err) throw err;
    app.get('/',(q,s)=>{
      s.send(`<h1>${result}<h1>`)
    })
    // console.log(result);
    db.close();
  });
}); 
app.listen(3000,console.log("port 3000"))