const express = require("express");
require("dotenv").config();
const db = require("./express-server/db/sequelize-init.js");
// Middleware
let cors = require("cors");
const morgan = require("morgan");
const parser = require("body-parser");
// Router
const router = require("./express-server/routes");
// Server Instantiation
const app = express();
app.set("port", process.env.PORT || 3000);

// Logging and parsing
app.use(cors());
app.use(morgan("dev"));
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
// Set up our routes
app.use(express.static("loaderio"));
app.use("/qa", router);

app.listen(app.get("port"), () => {
  console.log("Listening on", app.get("port"));
});
