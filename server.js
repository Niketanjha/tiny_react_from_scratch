var express = require('express');
var app = express();

var port = 3333;

app.use(express.static("./"));

app.get('/', function (req, res) {
    res.sendFile('./index.html');
});

app.listen(port, function () {
    console.log(`Server is listening on port: ${port}`);
})