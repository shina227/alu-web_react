import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import { createStore, applyMiddleware } from 'redux';
import { uiReducer } from './reducers/uiReducer';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';


const store = createStore(uiReducer,
  // window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
  composeWithDevTools(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


