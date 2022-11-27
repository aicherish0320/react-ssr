const express = require('express')
import React from 'react'
import * as ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import routes from '../routes'

const app = express()

app.use(express.static('public'))

app.get('*', function (req, res) {
  const html = ReactDOMServer.renderToString(
    <StaticRouter context={{ name: 'aic' }} location={req.path}>
      {routes}
    </StaticRouter>
  )
  res.send(`
  <html lang="en">
    <head>
      <title>Document</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" />
    </head>
    <body>
      <div id="root">${html}</div>
      <script src="/client.js"></script>
    </body>
  </html>
  `)
})

app.listen(3000, () => {
  console.log('3000 port')
})
