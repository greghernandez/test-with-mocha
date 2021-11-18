const chai = require('chai');
const expect = chai.expect;

const functions = require('../src/functions');

describe('dayNameByNumber', () => {
  it('Debe retornar el Día correspondiente al numero ingresado', () => {
    expect(functions.dayNameByNumber(1)).to.equal('Domingo');
    expect(functions.dayNameByNumber(2)).to.equal('Lunes');
    expect(functions.dayNameByNumber(3)).to.equal('Martes');
    expect(functions.dayNameByNumber(4)).to.equal('Miércoles');
    expect(functions.dayNameByNumber(5)).to.equal('Jueves');
    expect(functions.dayNameByNumber(6)).to.equal('Viernes');
    expect(functions.dayNameByNumber(7)).to.equal('Sábado');
  })
})