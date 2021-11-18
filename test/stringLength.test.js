const chai = require('chai');
const expect = chai.expect;

const functions = require('../src/functions');

describe('stringLength', () => {
  it('Dene regresar la longitud de un string', () => {
    expect(functions.stringLength('hello word')).to.equal(10);
    expect(functions.stringLength('Queretaro')).to.equal(9);
    expect(functions.stringLength('Hola')).to.equal(4); 
    expect(functions.stringLength(' ')).to.equal(1);
    expect(functions.stringLength('')).to.equal(0);
    expect(functions.stringLength('Number')).to.equal(6);
  });
})