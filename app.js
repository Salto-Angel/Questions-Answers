var express = require("express");
// var db = require('./db'); // will need to be 
// Middleware
let cors = require("cors");
var morgan = require("morgan");
var parser = require("body-parser");
// Router
var router = require('./express-server/routes');

var app = express();
app.set("port", 3000);

// Logging and parsing
app.use(cors());
app.use(morgan("dev"));
app.use(parser.json());
// Set up our routes
app.use("/qa", router);

app.get("/hello", (req, res)=>{
    res.send("hello world")
})



app.listen(app.get("port"), () => {
  console.log("Listening on", app.get("port"));
});
