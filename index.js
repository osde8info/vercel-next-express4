const GLITCH=process.env.GLITCH
const ZEIT=process.env.ZEIT

const express = require('express')
const pug = require('pug')

const app = express()

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html')
    res.status(200).send(`
        <h1>zeit node express</h1>
        <h2> a demo of node express pug for GLITCH and ZEIT</h2>
        <h3>Go to <a href="/about">/about</a></h3>
    `)
})

if (GLITCH) {
  app.listen(process.env.PORT)
}

// if (ZEIT)
  module.exports = app
//
