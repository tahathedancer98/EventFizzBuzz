const EventEmitter = require('events');
const myEmitter = new EventEmitter();

var n = readline()
myEmitter.on('FizzBuzz', FizzBuzz(n));

function FizzBuzz(nombre){
    if(nombre % 5 == 0) console.log("Buzz")
    else if(nombre % 5 == 0 && nombre % 3 == 0) console.log("FizzBuzz")
    else if(nombre % 3 == 0) console.log("Fizz")
    else console.log(nombre)
}

