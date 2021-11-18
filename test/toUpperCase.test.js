const chai = require('chai');
const expect = chai.expect;

const functions = require('../src/functions');

describe('toUpperCase', () => {
  it('Debe retornar un string en mayusculas', () => {
    expect(functions.toUpperCase('hola')).to.equal('HOLA');
    expect(functions.toUpperCase('programador')).to.equal('PROGRAMADOR');
    expect(functions.toUpperCase('test')).to.equal('TEST');
    expect(functions.toUpperCase('string')).to.equal('STRING');
    expect(functions.toUpperCase('diplomado')).to.equal('DIPLOMADO');
    expect(functions.toUpperCase('computadora')).to.equal('COMPUTADORA');
  })
})