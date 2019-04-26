import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk'

import App from './components/App.js';
import reducers from './reducers'

// development only axios helpers to test emails
import axios from 'axios';
window.axios = axios;

const store = createStore( reducers, {}, applyMiddleware(reduxThunk) )

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.querySelector('#root')
);
