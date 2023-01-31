const test = require('node:test');
const assert = require('node:assert/strict');
const operations = require('../02_06/1-operations').operations;

test.describe('Test division', async () => { 
    const op = new operations();
    test.it('should succeed', () => {
        const a = 6, b = 3, expected = 2;
        assert.strictEqual(op.divide(a, b), expected);
    });
    test.it('should throw an exception', () => {
        const a = 3,  b = 0;
        assert.throws(() => op.divide(a, b) );
    });
    test.it('should be true', () => assert.ok(1 < 2));
});
