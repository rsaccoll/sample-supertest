const Joi = require('@hapi/joi')
const validation = require('./validations/rest_validations');

const acceptEnconding = 'Accept-Encoding'
const acceptLanguage = 'Accept-Language'
const SecFetchDest = 'Sec-Fetch-Dest'
const secFetchMode = 'Sec-Fetch-Mode'
const secFetchSite = 'Sec-Fetch-Site'
const SecChUa = 'Sec-Ch-Ua'
const SecChUaPlatform = 'Sec-Ch-Ua-Platform'
const userAgent = 'User-Agent'
const XAmznTraceId = 'X-Amzn-Trace-Id'
const ContentType = 'Content-Type'

const get_schema = Joi.object().keys({
    args: '',
    headers: Joi.object().keys({
        acceptEnconding: validation.STRING_NOT_NULL.required(),
        ContentType: validation.STRING_NOT_NULL.required(),
        Host: validation.STRING_NOT_NULL.required(),
        userAgent: validation.STRING_NOT_NULL.required(),
        XAmznTraceId: validation.STRING_NOT_NULL.required()
    }),
    origin: validation.STRING_NOT_NULL.required(),
    url: validation.STRING_NOT_NULL.required()
})

module.exports = get_schema;