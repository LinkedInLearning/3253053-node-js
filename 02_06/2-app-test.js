const myTest = require('node:test');
const assert = require('node:assert/strict');
const myOperation = require('./1-operations');

myTest.test('test adddition', (tc) => {
    // Arrange
    const operations = new myOperation.operations();
    // Action
    const result = operations.add(1, 2);
    // Assert
    assert.strictEqual(result, 3);
});

myTest.test('test multiplication', () => {
    // Arrange
    const operations = new myOperation.operations();
    // Action
    let result = operations.multiply(2, 3);
    // Assert
    assert.equal(result, 6);
});

