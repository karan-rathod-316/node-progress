const express = require('express'); //**1

//express app - we'll call the express function and assign it to app//**2
const app = express()

//listen to the requests//**3
app.listen(3000)

app.get('/', (req, res) => {
        // res.send('<p>Home Page</p>')
        res.sendFile('./index.html', { root: __dirname })
    }) //**4

app.get('/about', (req, res) => {
    res.sendFile('./about.html', { root: __dirname })
}); //**4

//Redirects **5
app.get('/about-us', (req, res) => {
    res.redirect('/about')
})

//404 setup **6
app.use((req, res) => {
    res.status(404).sendFile('./404.html', { root: __dirname })
})