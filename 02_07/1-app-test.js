const myTest = require('node:test');
const assert = require('node:assert');
const myOperations = require('../02_06/1-operations');

myTest.test('Testing operations', async (t) => {
    const operations = new myOperations.operations();
    const a = 2;
    const b = 3;

    t.test('test addition', (t) => {
        const expected = 5;
        const result = operations.add(2,b3);
        assert.equal(result, expected);
    });
});