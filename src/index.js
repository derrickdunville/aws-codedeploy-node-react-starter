import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from 'store'
import App from './App'
import './containers/app.css';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react')
)
