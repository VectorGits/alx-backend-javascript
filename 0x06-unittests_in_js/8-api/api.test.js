const request = require('request');
const { expect } = require('chai');

describe('Index Page', function() {
    it('should return a status code of 200', function(done) {
        request('http://localhost:7865', function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
    it('should return the string "Welcome to the payment system"', function(done) {
        request('http://localhost:7865', function(error, response, body) {
            expect(body).to.equal('Welcome to the payment system');
            done();
        });
    });
})