const express = require('express')
const serveStatic = require('serve-static')

const app = express()
app.use(serveStatic(`${__dirname}/dist`))

app.listen(3000)