const express = require('express')
const app = express()
const port = process.env.port || 3000
const path = require('path')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let tables = [
    {
        "nombre" : "mariano",
        "telefono" : 8112345678,
        "email" : "mariano@ejemplo.com"
    },
]

let waitlist = [
    {
        "nombre" : "ernesto",
        "telefono" : 8187654321,
        "email" : "ernesto@ejemplo.com"
    },
]

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/home.html'))
})

app.get('/reserve', (req, res) => {
    res.sendFile(path.join(__dirname, '/reserve.html'))
})

app.get('/tables', (req, res) => {
    res.sendFile(path.join(__dirname, '/tables.html'))
})

app.post('/post-reserve', (req, res) => {
    if (tables.length < 3) {
        tables.push(req.body)
        res.json(true)
    } else {
        waitlist.push(req.body)
        res.json(false)
    }
})

app.post('/ajax-post-reserve', (req, res) => {
    if (tables.length < 3) {
        tables.push(req.body)
        res.json(true)
    } else {
        waitlist.push(req.body)
        res.json(false)
    }
})

app.get('/api/tables', (req, res) => {
    res.json(tables)
})

app.get('/api/waitlist', (req, res) => {
    res.json(waitlist)
})

app.post('/api/clear', (req, res) => {
    tables = []
    waitlist = []
    res.json(true)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})