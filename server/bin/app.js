const express = require('express');
const app = express();
const path = require('path');
const expressPort = process.env.EXPRESS_PORT || 8080;
const routes = require('../apis/router');

//Server the static HTML page
app.use(express.static(path.join(__dirname,'..', '..', 'build')));

//Allow cross origin requests
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, content-type, Accept");
	next();
});

//Use the required Routes
app.use(routes);

//Server Started on particular port
app.listen(expressPort, (err) => {
	if(err) { console.log(err); return; }
	console.log('Server started on', expressPort);
});

