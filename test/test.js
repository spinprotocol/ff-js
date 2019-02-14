const { expect } = require('chai');
const {
    /**
     * @description : Base module list
     */
    map, filter, reduce,
    take, takeAll,

    go, pipe,

    /**
     * @description : Lazy module list
     */
    mapL, filterL, flatL, flatMapL,
    
    /**
     * @description : Concurrency module list
     */
    mapC, filterC, reduceC, takeC, takeAllC
    
} = require('../index.js');

describe('map', function () {
    it('map(a => a + 10, [1, 2, 3])', () => {
        expect(
            map(a => a + 10, [1, 2, 3])
        ).to.eql(
            [11, 12, 13]
        );
    });
});

describe('filter', function () {
    it('filter(a => a < 3, [1, 2, 3])', () => {
        expect(
            filter(a => a < 3, [1, 2, 3])
        ).to.eql(
            [1, 2]
        );
    });
});

describe('reduce', function () {
    it('reduce((a, acc) => a + acc, [1, 2, 3])', () => {
        expect(
            reduce((a, acc) => a + acc, [1, 2, 3])
        ).to.eql(
            6
        );
    });
});

describe('take', function () {
    it('take(2, [1, 2, 3])', () => {
        expect(
            take(2, [1, 2, 3])
        ).to.eql(
            [1, 2]
        );
    });
});