
function testPromise(value){
    return new Promise((resolve, reject) => {
        var data = [];
        if (value <= 0) {
            reject('The value should be greater than 0');
        } else if (value > 1000) {
            reject('The value should no be greater than 1000');
        }
        for(var i = 0; i < value; i++) {
            data.push(`Item ${i+1}`);
        }
        resolve(data);
    });
}

(async function read() {
    const data = await testPromise(10);
    console.log(data);
})();