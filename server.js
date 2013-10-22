// var http = require('http');

// var	port= 8000;

// var	messages=[];

// function messageCallback (request, response){
// 		response.writeHead(200, {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin':'*'});


// 	if (request.method =='GET') {
// 		response.write(JSON.stringify(messages))
// 		response.write("hello World!")
// 	};
// 		if(request.url == '/api/messages/add'){
// 	  if (request.method == 'POST') {
//    var postData = '';
//    request.on('data', function(chunk) {
//     postData += chunk.toString();
//    });
//    request.on('end', function() {
// messages.push(JSON.parse(postData));

//     console.log("Got POST data:");
//     console.log(JSON.parse(postData));

//    });
//   }
// }
// 	response.end();



// }
// http.createServer(messageCallback).listen(port);

// console.log('Server running at' + port)

var express = require('express');
var app = express();
var messages = [];

app.use(express.bodyParser());
app.use(function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Origin', 'OPTIONS, GET, POST');
  res.header('Access-Control-Allow-Origin', 'Origin, X-Requested-With, Content-Type, Accept');
  next();

})

app.get('/getMessages', function(req, res){
  res.send(messages);
});

app.post('/sendMessage', function(req, res){
  messages.push(req.body);
  res.send(messages);
});


app.listen(3000);
console.log("listen!!");










