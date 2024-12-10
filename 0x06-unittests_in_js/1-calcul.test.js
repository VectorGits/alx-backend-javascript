const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('should return the sum of rounded numbers', () => {
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    assert.strictEqual(calculateNumber('SUM', 1.2, 3.8), 5);
    assert.strictEqual(calculateNumber('SUM', 2.5, 2.5), 6);
  });

  it('should return the difference of rounded numbers', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 3.8), -3);
    assert.strictEqual(calculateNumber('SUBTRACT', 2.5, 2.5), 0);
  });

  it('should return the division of rounded numbers', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    assert.strictEqual(calculateNumber('DIVIDE', 1.2, 3.8), 0.25);
    assert.strictEqual(calculateNumber('DIVIDE', 2.5, 2.5), 1);
  });

  it('should return "Error" when dividing by zero', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    assert.strictEqual(calculateNumber('DIVIDE', 1.2, 0.2), 'Error');
  });
});
