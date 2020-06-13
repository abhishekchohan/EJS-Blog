//jshint esversion:6
require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

// Setting ejs as our view engine
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// MongoDB setup 

mongoose.connect(process.env.MONGO_DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
mongoose.connection.on('connected', () => {
  console.log("Connected to DB :)");
})

// importing post schema & model
require("./model");


// importing routes...

app.use(require('./routes'));

// Server running on port .... 
app.listen(process.env.PORT || 3001, () => console.log(`Server running on ${process.env.PORT || 3001}`));
