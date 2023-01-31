const greeting = (name) => 
    new Promise((resolve, reject) => {
        (!name) ? reject(`Invalid name.`) : resolve(`Hello ${name}`)
    });
(async () => {
    var data = greeting("Nina");
    console.log(await data);
}
)();