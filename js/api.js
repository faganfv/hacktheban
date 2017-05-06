//jshint esversion: 6

var data = require("../data/faq");
var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
	console.log(`${req.method} request for '${req.url}' - ${JSON.stringify(req.body)}`);
	next();
});

app.use(express.static("."));

app.use(cors());

app.get("/q", function(req, res) {
	res.json(data);
});
app.get("/en", function(req, res) {
	listEnglish(res);
});
app.get("/es", function(req, res) {
	listEspanol(res);
});
app.get("/search", function(req, res) {
	var query = req.query
	search(res, query);
});

app.listen(3000);

console.log("Express app running on port 3000");


function listEnglish(res) {

	var en = data.filter(function(item) {
		return (item.answerEn !== null) && (item.answerEn !== "");
	});

	res.end(JSON.stringify(en));

}

function listEspanol(res) {

	var es = data.filter(function(item) {
		return (item.answerEs !== null) && (item.answerEs !== "");
	});

	res.end(JSON.stringify(es));

}

function search(res, query) {
  searchTerms = query.query;
  if (searchTerms === undefined) {
    searchTerms = "";
  }
  searchTerms = searchTerms.toLowerCase();
  var searchTermsArray = searchTerms.split(" ");
  var search = data.filter(function(item) {
		"use strict";
    let match = true;
    searchTermsArray.forEach(function(term, index, arr){
        match = match && JSON.stringify(item).toLowerCase().includes(term);
      });
    return match;
  });
	res.end(JSON.stringify(search));
}
