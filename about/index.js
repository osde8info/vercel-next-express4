const express = require('express')

const app = express()

app.get('*', (req, res) => {
    res.set('Content-Type', 'text/html')
    res.status(200).send(`
        <h1>GLITCH ZEIT ABOUT</h1>
        <h2>Go to <a href="/">home</a></h2>
    `)
})

if (GLITCH) {
  app.listen(process.env.PORT)
}

// if (ZEIT)
  module.exports = app
//
