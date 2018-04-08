var http = require('http');
var fs = require('fs');
var bc = require('./main.js')

var server = http.createServer(function(req, res){
  console.log('request was made: ' + req.url);
  res.writeHead(200, {'Content-Type': 'application/json'});
  let witCoin = new bc.Blockchain();
  console.log('Mining block 1 .....');
  witCoin.addBlock(new bc.Block(1, "10/07/2017", {amount: 4}));
  console.log('Mining block 2 .....');
  witCoin.addBlock(new bc.Block(2, "11/07/2017", {amount: 6}));
  console.log('Check blockchain: ' + witCoin.isChainValid());
  res.end(JSON.stringify(witCoin, null, 4))
});

server.listen(3000, '127.0.0.1');
console.log('Listening to port 3000');
