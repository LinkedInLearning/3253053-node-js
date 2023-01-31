
exports.operations = class Operations {
    add = (a, b) => a + b;
    
    multiply = (a, b) => a * b;

    divide = (a, b) => {
        if (b == 0) {
            throw new Error('Divide by zero!');
        }
        return a/b;
    }
}