var http = require('http');
http.createServer(function (req,res){
    res.writeHead(200 ,{'content-type':'text/html'})
    res.write("Ronit Satish Mehta 6000923027");
    res.end('hello world');
}).listen(8080);