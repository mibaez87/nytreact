var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

var PORT = 3000;

var db = require("./models");
// var Article = require("./models/Article.js");

var app = express();

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/nytreact", {
    useMongoClient: true
});

db.Article.create(data)
    .then(function (dbArticle) {
        console.log(dbArticle);
    })
    .catch(function (err) {
        console.log(err.message);
    });

// INSERT ROUTES HERE

app.listen(PORT, function () {
    console.log("App running on port " + PORT + "!");
});