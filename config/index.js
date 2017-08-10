require('dotenv').config();

const loggerConfig = require('./components/logger');
const serverConfig = require('./components/server');
const dbConfig = require('./components/db');

const config = Object.assign({}, loggerConfig, serverConfig, dbConfig);

module.exports = config;
