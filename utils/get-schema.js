const Joi = require('@hapi/joi')
const validation = require('./validations/rest_validations');

const get_schema = Joi.object().keys({
    'args': validation.STRING_NOT_NULL.required(),
    'headers': Joi.object().keys({
        'Accept': validation.STRING_NOT_NULL.required(),
        'Accept-Encoding': validation.STRING_NOT_NULL.required(),
        'Accept-Language': validation.STRING_NOT_NULL.required(),
        'Host': validation.STRING_NOT_NULL.required(),
        'Referer': validation.STRING_NOT_NULL.required(),
        'Sec-Fetch-Mode': validation.STRING_NOT_NULL.required(),
        'Sec-Fetch-Site': validation.STRING_NOT_NULL.required(),
        'User-Agent': validation.STRING_NOT_NULL.required()
    })
    'origin': validation.IP.required(),
    'url': validation.STRING_NOT_NULL.required()
})