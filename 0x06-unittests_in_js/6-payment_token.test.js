const assert = require('assert');
const PaymentToken = require('../6-payment_token');

describe('getPaymentTokenFromAPI', function() {
  it('should return a resolved promise with the correct token', function(done) {
    getPaymentTokenFromAPI(true)
    .then((res) => {
      assert.equal(res.data, 'Successful response from the API');
      done();
    })
    .catch((err) => done(err));
  });
});
