const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const config = require('./config/');
// eslint-disable-next-line no-unused-vars
const PC = require('./api/models/pc');
const routes = require('./api/routes/');

mongoose.Promise = global.Promise;
const app = express();

mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/PCDB`);

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// Parse application/json
app.use(bodyParser.json());

app.listen(config.server.port, () => {
	if (config.logger.enabled) {
		console.log(`Server started at ${config.server.port} port`);
	}
});

routes(app);

// Handling missing/wrong routes
app.use((req, res) => {
	res.status(404).send({url: req.originalUrl + ' not found'});
});
