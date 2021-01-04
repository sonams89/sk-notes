import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import App from './src/app';
import Store from './store/index';
import './styles/style.css';
render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('root')
);