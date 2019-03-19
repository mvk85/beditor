import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';

const Application = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

const Node = document.getElementById('root');

ReactDOM.render(Application, Node);
