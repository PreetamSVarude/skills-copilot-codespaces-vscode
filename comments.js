// Create web server
// Create RESTful API
// Create CRUD operations

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

var comments = [
  {id: 1, author: "Jared", text: "This is a comment"},
  {id: 2, author: "Pete Hunt", text: "This is *another* comment"}
];

app.get('/comments', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(comments));
});

app.post('/comments', function(req, res) {
  var newComment = req.body;
  newComment.id = comments.length + 1;
  comments.push(newComment);
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(newComment));
});

app.listen(3000, function() {
  console.log('Server started: http://localhost:3000/');
});
