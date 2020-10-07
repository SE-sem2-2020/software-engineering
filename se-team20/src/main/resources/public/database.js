var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://cluster0-shard-00-02.hfesc.mongodb.net:27017/seerdatabase";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});