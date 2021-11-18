const chai = require('chai');
const expect = chai.expect;

const functions = require('../src/functions');

describe('isPair', () => {
  it('Verificar función isPair', () => {
    expect(functions.isPair(2)).to.equal('Si');
    expect(functions.isPair(5)).to.equal('No');
    expect(functions.isPair(8)).to.equal('Si');
    expect(functions.isPair(11)).to.equal('No');
    expect(functions.isPair(16)).to.equal('Si');
    expect(functions.isPair(35)).to.equal('No');
  })
})