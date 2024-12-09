const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return the sum of rounded numbers', () => {
    assert.strictEqual(calculateNumber(1.4, 4.5), 6);
    assert.strictEqual(calculateNumber(1.2, 3.8), 5);
    assert.strictEqual(calculateNumber(2.5, 2.5), 6);
    assert.strictEqual(calculateNumber(-1.4, -4.5), -5); // Corrected expected value
    assert.strictEqual(calculateNumber(-1.2, -3.8), -5);
  });
});
