const joi = require('joi');

const utilities = {
	validate: (toValidate, schema) => {
		const {error, value: envVars} = joi.validate(toValidate, schema);
		if (error) {
			throw new Error(`Config validation error: ${error.message}`);
		}
		return envVars;
	}
};

module.exports = utilities;
