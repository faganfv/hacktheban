//jshint esversion: 6
var http = require("http");
var data = require("../data/faq");
var fs = require("fs");
var auto = fs.readFileSync("./testautocomplete.html");
var ajax = fs.readFileSync("./js/ajaxcomplete.js");

http.createServer(function(req, res) {
	if (req.url === "/") {
		res.writeHead(200, {"Content-Type": "text/json"});
	    res.end(JSON.stringify(data));
	} else if (req.url === "/en") {
		listEnglish(res);
	} else if (req.url === "/es") {
		listEspanol(res);
	} else if (req.url === "/autocomplete") {
		res.writeHead(200, {"Content-Type": "text/html"});
		res.end(auto);
	} else if (req.url === "/js/ajaxcomplete.js") {
		res.writeHead(200, {"Content-Type": "text/html"});
		res.end(ajax);
  } else if (req.url.slice(0,7) === "/search") {
    var url = require('url');
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    search(res, query);
	} else {
		res.writeHead(404, {"Content-Type": "text/plain"});
		res.end("Whoops... Data not found");
	}



}).listen(3000);

console.log("Server listening on port 3000");


function listEnglish(res) {

	var en = data.filter(function(item) {
		return item.answerEn !== null;
	});

	res.end(JSON.stringify(en));

}

function listEspanol(res) {

	var es = data.filter(function(item) {
		return item.answerEn !== null;
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
