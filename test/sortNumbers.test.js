const chai = require('chai');
const expect = chai.expect;

const functions = require('../src/functions');

describe('sortNumbers', () => {
  it('Verificar que sortNumbers ordene un los numeros de un array', () => {
    expect(functions.sortNumbers([3, 1, 2])).to.deep.equal([1, 2, 3]);
    expect(functions.sortNumbers([3, 1, 2, 4, 5, 6])).to.deep.equal([1, 2, 3, 4, 5, 6]);
    expect(functions.sortNumbers([3, 1, 2, 4, 5, 6, 7, 8, 9, 10])).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(functions.sortNumbers([3, 1, 2])).to.have.all.members([1, 2, 3]);
    expect(functions.sortNumbers([3, 1, 2, 4, 5, 6])).to.have.all.members([1, 2, 3, 4, 5, 6]);
    expect(functions.sortNumbers([3, 1, 2, 4, 5, 6, 7, 8, 9, 10])).to.have.all.members([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  })
})