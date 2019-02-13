const { expect } = require('chai');
const {
    take
} = require('../index.js');

describe('take', function () {
    it('take(1, [1, 2, 3])', () => {
        expect(take(1, [1, 2, 3])).to.eql([1]);
    });
});