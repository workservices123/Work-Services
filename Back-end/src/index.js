const express = require('express')
const app = express()

const port = 3000

app.get('/home', (req, res) =>{

    res.send('enviando respuesta')
})

app.listen(port)