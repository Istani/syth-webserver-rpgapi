var express = require('express');
var app = express();
var server = require("http").createServer(app);

var PORT = 5000;

var RP_API = require("@syth/web-api-rpg");
app.use('/:channel/', RP_API);

app.get('*', (req, res) => {
  res.send({ error: 'Wrong URL' });
})

server.listen(PORT, () => console.log("Webinterface running! Port: " + PORT));