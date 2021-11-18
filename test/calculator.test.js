const chai = require('chai');
const expect = chai.expect;

const calculator = require('../src/calculator');

describe('Calculator', () => {
  // Add tests
  describe('add', () => {
    it('suma de dos numeros', () => {
      expect(calculator.add(2,4)).to.equal(6);
      expect(calculator.add(4,4)).to.equal(8);
      expect(calculator.add(12,102)).to.equal(114);
      expect(calculator.add(32,30)).to.equal(62);
    });
  });

  // Multiply tests
  describe('Multiply', () => {
    it('multiplica dos numeros', () => {
      expect(calculator.multiply(2,2)).to.equal(4);
      expect(calculator.multiply(3,2)).to.equal(6);
      expect(calculator.multiply(1,2)).to.equal(2);
      expect(calculator.multiply(90,87)).to.equal(7830);
    });
  })

  // Divide tests
  describe('Divide', () => {
    it('divide dos numeros', () => {
      expect(calculator.divide(2,2)).to.equal(1);
      expect(calculator.divide(3,2)).to.equal(1.5);
      expect(calculator.divide(1,2)).to.equal(0.5);
      expect(calculator.divide(75,15)).to.equal(5);
    });
  })

  // Subtract tests
  describe('Subtract', () => {
    it('resta dos numeros', () => {
      expect(calculator.subtract(2,2)).to.equal(0);
      expect(calculator.subtract(3,2)).to.equal(1);
      expect(calculator.subtract(1,2)).to.equal(-1);
      expect(calculator.subtract(75,15)).to.equal(60);
    });
  })
})