const api = require('../02_02/2-exports-functions');
const fullname = api.printFullname("Nina", "Wijffels Kapinga");

console.log(`The default fullname is: ${api.fullname}.`);
console.log(`The dynamic fullname is: ${fullname}`)
