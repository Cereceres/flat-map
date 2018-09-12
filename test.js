const flatMap = require('./index');

const assert = require('assert');


describe('test to flatMap', () => {
    it('should return flatten the array', () => {
        assert.deepEqual(flatMap([ 1, 2, 3, [ 4, 5 ] ], (r) => r * 2), [
            2, 4, 6, 8, 10
        ]);
    });
});
