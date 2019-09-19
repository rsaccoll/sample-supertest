const Joi = require('@hapi/joi')
const validation = require('./validations/rest_validations');

const acceptEnconding = 'Accept-Encoding'
const acceptLanguage = 'Accept-Language'
const secFetchMode = 'Sec-Fetch-Mode'
const secFetchSite = 'Sec-Fetch-Site'
const userAgent = 'User-Agent'

const get_schema = Joi.object().keys({
    args: '',
    headers: Joi.object().keys({
        Accept: validation.STRING_NOT_NULL.required(),
        acceptEnconding: validation.STRING_NOT_NULL.required(),
        acceptLanguage: validation.STRING_NOT_NULL.required(),
        Host: validation.STRING_NOT_NULL.required(),
        Referer: validation.STRING_NOT_NULL.required(),
        secFetchMode: validation.STRING_NOT_NULL.required(),
        secFetchSite: validation.STRING_NOT_NULL.required(),
        userAgent: validation.STRING_NOT_NULL.required()
    }),
    origin: validation.IP.required(),
    url: validation.STRING_NOT_NULL.required()
})

module.exports = get_schema;