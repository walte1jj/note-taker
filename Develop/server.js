const express = require("express");
const fs = require("fs");
const db = require("./db/db.json");
const path = require("path");

var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));



