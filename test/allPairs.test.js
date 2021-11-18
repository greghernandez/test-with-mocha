const chai = require('chai');
const expect = chai.expect;

const functions = require('../src/functions');

describe('allPairs', () => {
  it('Verificar respuesta de allPairs', () => {
    expect(functions.allPairs([2, 4, 6, 8, 10, 12, 14, 16])).to.equal('Si');
    expect(functions.allPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 11])).to.equal('No');
    expect(functions.allPairs([2, 4, 8, 16, 32, 64])).to.equal('Si');
    expect(functions.allPairs([74, 3, 2])).to.equal('No');
    expect(functions.allPairs([22, 66, 88])).to.equal('Si');
    expect(functions.allPairs([3.3, 2.1, 1.1])).to.equal('No');
  })
})