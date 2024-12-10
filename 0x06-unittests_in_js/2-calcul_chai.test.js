const { expect } = require('chai');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return the sum of rounded numbers', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
      expect(calculateNumber('SUM', 1.2, 3.8)).to.equal(5);
      expect(calculateNumber('SUM', 2.5, 2.5)).to.equal(6);
    });

    it('should handle negative numbers', () => {
      expect(calculateNumber('SUM', -1.4, -4.5)).to.equal(-6);
      expect(calculateNumber('SUM', -1.2, -3.8)).to.equal(-5);
    });

    it('should handle mixed positive and negative numbers', () => {
      expect(calculateNumber('SUM', -1.4, 4.5)).to.equal(3);
      expect(calculateNumber('SUM', 1.2, -3.8)).to.equal(-3);
    });

    it('should handle zero', () => {
      expect(calculateNumber('SUM', 0, 0)).to.equal(0);
      expect(calculateNumber('SUM', 0, 4.5)).to.equal(5);
      expect(calculateNumber('SUM', 1.4, 0)).to.equal(1);
    });
  });

  describe('SUBTRACT', () => {
    it('should return the difference of rounded numbers', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
      expect(calculateNumber('SUBTRACT', 1.2, 3.8)).to.equal(-3);
      expect(calculateNumber('SUBTRACT', 2.5, 2.5)).to.equal(0);
    });

    it('should handle negative numbers', () => {
      expect(calculateNumber('SUBTRACT', -1.4, -4.5)).to.equal(4);
      expect(calculateNumber('SUBTRACT', -1.2, -3.8)).to.equal(3);
    });

    it('should handle mixed positive and negative numbers', () => {
      expect(calculateNumber('SUBTRACT', -1.4, 4.5)).to.equal(-6);
      expect(calculateNumber('SUBTRACT', 1.2, -3.8)).to.equal(5);
    });

    it('should handle zero', () => {
      expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
      expect(calculateNumber('SUBTRACT', 0, 4.5)).to.equal(-5);
      expect(calculateNumber('SUBTRACT', 1.4, 0)).to.equal(1);
    });
  });

  describe('DIVIDE', () => {
    it('should return the division of rounded numbers', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
      expect(calculateNumber('DIVIDE', 1.2, 3.8)).to.equal(0.25);
      expect(calculateNumber('DIVIDE', 2.5, 2.5)).to.equal(1);
    });

    it('should handle division by zero', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 1.2, 0.2)).to.equal('Error');
    });

    it('should handle negative numbers', () => {
      expect(calculateNumber('DIVIDE', -1.4, -4.5)).to.equal(0.2);
      expect(calculateNumber('DIVIDE', -1.2, -3.8)).to.equal(0.25);
    });

    it('should handle mixed positive and negative numbers', () => {
      expect(calculateNumber('DIVIDE', -1.4, 4.5)).to.equal(-0.2);
      expect(calculateNumber('DIVIDE', 1.2, -3.8)).to.equal(-0.25);
    });

    it('should handle zero', () => {
      expect(calculateNumber('DIVIDE', 0, 4.5)).to.equal(0);
      expect(calculateNumber('DIVIDE', 0, -3.8)).to.equal(0);
    });
  });
});
