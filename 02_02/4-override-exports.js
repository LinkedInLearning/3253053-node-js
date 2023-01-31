module.exports = class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    fullname() {
        return `${this.firstname} ${this.lastname}`;
    }
}


// console.log(exports)
// console.log(module.exports)