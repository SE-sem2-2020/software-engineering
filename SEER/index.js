const { Console } = require('console');
const express = require('express');
const path = require('path');

//mongo
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_db');

var bookShcema = mongoose.Schema({
    type: String,
    author: String,
    title: String,
    journal: String,
    year : String,
    volume : String,
    number : String,
    eprint  : String,
    eprinttype  : String,
    eprintclass  : String,
    month  : String,
    annote  : String
 });

 var Book = mongoose.model("Book", bookShcema);

 
 //end
const app = express();

const PORT = process.env.PORT||5000;

app.use(express.static(path.join(__dirname, 'public')));
//database
app.post('/searchAction', function(req, res){
    
});

app.listen(PORT);