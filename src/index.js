import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// import store from './redux/store';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './redux/reducers/rootReducer';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
