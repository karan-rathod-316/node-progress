const http = require('http');
const fs = require('fs')


const server = http.createServer((req, res) => {
    console.log(req.url, req.method)

    // set header content type
    res.setHeader('Content-type', 'text/html');
    // res.write('<p>hello there</p>');
    // res.end();

    let path;

    switch (req.url) {
        case '/':
            path = './serverTest_7.html';
            res.statusCode = 200;
            break;
        case '/about':
            path = './serverTestAbt_7.html';
            res.statusCode = 200;
            break;
            // case '/about-me':
            //     res.statusCode = 301;
            //     res.setHeader('Location', '/about');
            //     res.end();
            break;
        default:
            path = './serverTest404_7.html';
            res.statusCode = 404;

    }


    //send an html file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end()
        } else {
            res.write(data);
            res.end()
        }

    })

});

server.listen(3000, 'localhost', () => {
    console.log('listening for request')
})