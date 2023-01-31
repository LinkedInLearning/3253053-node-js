```
const greeting = (name) => 
    new Promise((resolve, reject) => {
        (!name) ? reject(`Invalid name.`) : resolve(`Hello ${name}`)
    });
(async () => console.log(greeting("Nina")) )();
```
Promise { 'Hello Nina' }