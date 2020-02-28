var express = require("express");
require("dotenv").config();
var db = require("./express-server/db/sequelize-init.js");
// Middleware
let cors = require("cors");
var morgan = require("morgan");
var parser = require("body-parser");
// Router
var router = require("./express-server/routes");

var app = express();
app.set("port", 3000);

// Logging and parsing
app.use(cors());
app.use(morgan("dev"));
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
// Set up our routes
app.use("/qa", router);

app.listen(app.get("port"), () => {
  console.log("Listening on", app.get("port"));
});
