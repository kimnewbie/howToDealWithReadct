import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './modules/counter';
import todosReducer from './modules/todos';
import { logger } from 'redux-logger';


const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
    middleware: [logger],
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
); 