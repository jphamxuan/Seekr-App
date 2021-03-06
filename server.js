const express = require("express");
const path = require("path");
var bodyparser = require('body-parser')
const PORT = process.env.PORT || 3001;
const routes = require("./routes");

const app = express();
var mongoose = require('mongoose')



mongoose.connect('mongodb://localhost/dataDB');

// Middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(routes)



// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
