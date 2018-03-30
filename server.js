const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;


var logger = require("morgan");


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));


app.use(logger("dev"));


mongoose.Promise = global.Promise;
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/nytreact", {
        useMongoClient: true
    });

// INSERT ROUTES HERE

app.listen(PORT, function () {
    console.log("App running on port " + PORT + "!");
});