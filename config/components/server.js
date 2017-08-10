const joi = require('joi');
const utils = require('./utils');

const schema = joi.object({
	PORT: joi.number().required()
}).unknown().required();

const envVars = utils.validate(process.env, schema);

const config = {
	server: {
		port: envVars.PORT
	}
};

module.exports = config;
