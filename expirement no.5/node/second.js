var http = require('http');
var dt = require('./firstmodule');

http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    res.write("the date and time are currently:" + dt.myDateTime()+"\n Ronit Satish Mehta 60009230207");
    res.end();
}).listen(8080);
