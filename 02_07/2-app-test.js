const myTest = require('node:test');
const assert = require('node:assert');
const myOperations = require('../02_06/1-operations');

myTest.test('Testing operations ', async (t) => {
    const operations = new myOperations.operations();
    const a = 2;
    const b = 3;

    await t.test('test addition', (t) => {
        const expected = 5;
        const result = operations.add(a,b);
        assert.equal(result, expected);
    });
    await t.test('test multiplication', (t) => {
        const expected = 6;
        const result = operations.multiply(a,b);
        assert.equal(result, expected);
    });
});