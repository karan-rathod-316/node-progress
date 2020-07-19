const http = require('http');
const fs = require('fs')
var _ = require('lodash');

const server = http.createServer((req, res) => {
    //lodash
    const num = _.random(0, 20);
    const greet = _.once(() => { console.log('hello') })

    greet();
    greet();

});

server.listen(3000, 'localhost', () => {
    console.log('listening for request')
})

//Things to note
//"npm init" to add the package.json file
//use "npm install" to install any dependecies in folders that you are downloading from git
// "npm i lodash" to add lodash to our dependencies