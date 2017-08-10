const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const config = require('./config/');
const PC = require('./api/models/pc');
const routes = require('./api/routes/');

const app = express();

routes(app);
mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/PCDB`);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(config.server.port, () => {
	if (config.logger.enabled) {
		console.log(`Server started at ${config.server.port} port`);
	}
});


