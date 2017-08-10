const joi = require('joi');
const utils = require('./utils');

const environmentVarsSchema = joi.object({
	LOGGER_LEVEL: joi.string()
		.allow(['warn', 'info', 'error', 'debug'])
		.default('info'),
	LOGGER_ENABLED: joi.boolean()
		.truthy('true').truthy('TRUE')
		.falsy('false').falsy('FALSE')
		.default(true)
}).unknown().required();

// If an error is thrown we DO NOT catch it
const envVars = utils.validate(process.env, environmentVarsSchema);

const config = {
	logger: {
		level: envVars.LOGGER_LEVEL,
		enabled: envVars.LOGGER_ENABLED
	}
};

module.exports = config;
