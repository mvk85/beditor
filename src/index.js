import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/App/App';
import store from './store';

const Application = (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

// eslint-disable-next-line no-undef
const Node = document.getElementById('root');

ReactDOM.render(Application, Node);
