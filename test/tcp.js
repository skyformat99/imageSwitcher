var net = require('net');

var HOST = '127.0.0.1';
var PORT = 11111;
var cnt = 1;

var client = net.connect(PORT, HOST, function() {
    console.log('CONNECTED TO: ' + HOST + ':' + PORT);
    client.write('I am wayne, from NodeJS !');
});

client.on('data', function(data) {
    console.log('--->' + data);
});

client.on('error', function() {
    console.log('error: ' );
    client.destroy();
});

client.on('close', function() {
    console.log('Connection closed');
});

function intervalFunc() {
	data={"url":"","desc":""};
	data["url"]="http://www.stevenround-birdphotography.com/source/image/puffin-"
		+ ("0" + cnt++).slice(-2) +".jpg";
	data["desc"] = "from node js"+cnt 
	client.write(JSON.stringify(data));
	console.log('<---'+JSON.stringify(data));
}

setInterval(intervalFunc, 20);
