//Accessing data from other files

let { people, ages } = require('./people_4');

console.log(people, ages)

//Accessing builtin modules

const os = require('os')

console.log(os.platform(), os.homedir());