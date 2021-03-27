const express = require('express');

const app = express();

app.get('/', (req, res) => res.send("<h1>Expressjs with HTML"));

app.listen(8080);

console.log("Server on port 8080");