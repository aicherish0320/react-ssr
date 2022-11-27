import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import routes from '../routes'

ReactDOM.hydrate(
  <BrowserRouter>{routes}</BrowserRouter>,
  document.getElementById('root')
)
