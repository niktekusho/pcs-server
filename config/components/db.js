const joi = require('joi');
const utils = require('./utils');

const schema = joi.object({
	MONGO_USER: joi.string(),
	MONGO_PSW: joi.string(),
	MONGO_HOST: joi.string().required(),
	MONGO_PORT: joi.number().required()
}).unknown().required();

const envVars = utils.validate(process.env, schema);

const config = {
	db: {
		host: envVars.MONGO_HOST,
		port: envVars.MONGO_PORT,
		user: envVars.MONGO_USER,
		psw: envVars.MONGO_PSW
	}
};

module.exports = config;
