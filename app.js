const express = require('express');
const exphbs = require('express-handlebars');

// create app express
const app = express();

// setting up handlebars~~~~
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// setting our static content to the public folder
app.use(express.static("public"));


app.use(require('./routes'));

const port = process.env.PORT || 5000

app.listen(port)
// Log port number
console.log(' 🌎 ===> Server listening on port: ' + port);