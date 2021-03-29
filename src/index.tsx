import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {createStore} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import {reduceFunc} from './reduce';

const store = createStore(reduceFunc,composeWithDevTools() )

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
