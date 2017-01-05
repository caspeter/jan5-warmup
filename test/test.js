'use strict';

var expect = require('chai').expect;
var code = require('../script.js');

describe('Function', function() {
    it('should return array with two integers that add up to the target integer', function() {
        expect(code([1, 2, 3, 4, 5, 6, 7], 13)).to.deep.equal([6, 7]);
    });
});
