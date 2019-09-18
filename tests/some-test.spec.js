var request = require('supertest'),
expect = require('chai').expect;
var assert = require('chai').assert;
var assertionError = require("chai").AssertionError
require('dotenv').config({ path: '.env' });

const url = process.env.URL_TO_TEST

describe('HTTPBIN Sample for tests', function(){

    it('/GET Test Example', async() => {
        const result = await request(url)
        .get('/get')
        .set('Content-Type', 'application/json')
        .timeout({ response: 100000, deadline: 100000 })
        .then(result => {
            expect(result.statusCode, JSON.stringify(result, null, 2)).to.equal(200);
            assert.equal(result.body.url, 'https://httpbin.org/get', JSON.stringify(result, null, 2));
        })
    });
})