var http = require("http");

var data = require("./data/faq");

http.createServer(function(req, res) {

	if (req.url === "/") {
		res.writeHead(200, {"Content-Type": "text/json"});
	    res.end(JSON.stringify(data));
	} else if (req.url === "/en") {
		listEnglish(res);
	} else if (req.url === "/es") {
		listEspanol(res);
	} else {
		res.writeHead(404, {"Content-Type": "text/plain"});
		res.end("Whoops... Data not found");
	}



}).listen(3000);

console.log("Server listening on port 3000");


function listEnglish(res) {

	var en = data.filter(function(item) {
		return item.answerEn != null;
	});

	res.end(JSON.stringify(en));

}

function listEspanol(res) {

	var es = data.filter(function(item) {
		return item.answerEn != null;
	});

	res.end(JSON.stringify(es));

}
