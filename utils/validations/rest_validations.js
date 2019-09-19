const Joi = require('@hapi/joi')

const rest_validations = {
    STRING_NOT_NULL: Joi.string(),
    STRING_ALLOW_NULL: Joi.string().allow('', null),
    IP: Joi.string().ip({version: 'ipv4'}).allow('', null),
};

module.exports = rest_validations;