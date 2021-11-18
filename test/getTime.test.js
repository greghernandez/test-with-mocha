const chai = require('chai');
const expect = chai.expect;

const functions = require('../src/functions');

const date = new Date()
const hours = date.getHours()
const minutes = date.getMinutes()
const seconds = date.getSeconds()
const time = `${hours}:${minutes}:${seconds}`

describe('getTime', () => {
    it('should return a string', () => {
      expect(functions.getTime()).to.equal(time);
      expect(functions.getTime()).to.be.a('string');
      expect(functions.getTime()).to.equal(time);
      expect(functions.getTime()).to.be.a('string');
      expect(functions.getTime()).to.equal(time);
      expect(functions.getTime()).to.be.a('string');
    })
})