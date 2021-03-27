const express = require('express');

const app = express();

app.get('/', (req, res) => res.send("<h1>Expressjs with HTML"));

app.listen(3000);

console.log("Server on port 3000");