var request = require('supertest'),
expect = require('chai').expect;
var assert = require('chai').assert;
var assertionError = require("chai").AssertionError
const Joi = require('@hapi/joi');
const getSchema = require('../../utils/get-schema')
require('dotenv').config({ path: '.env' });

const url = process.env.URL_TO_TEST

describe('HTTPBIN Contract Sample for tests', function(){

    it('/GET Test Example', async() => {
        const result = await request(url)
        .get('/get')
        .set('Content-Type', 'application/json')
        .timeout({ response: 100000, deadline: 100000 })
        .then(result => {
            try {
                expect(result.statusCode, JSON.stringify(result, null, 2)).to.equal(200);
                Joi.assert(result.body, getSchema.get_schema);
            } catch(assertionError) {
                throw new Error(assertionError);
            }
        })
    });

})