import React from 'react';
import ReactDOM from 'react-dom';
import { ServerRouter } from 'react-router-dom';

import App from './App';

ReactDOM.render(
  (
    <ServerRouter>
      <App />
    </ServerRouter>
  ), document.getElementById('root'),
);
