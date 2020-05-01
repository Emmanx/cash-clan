import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';

import CSSReset from './CSSReset';
import GlobalStyles from './GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <CSSReset />
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
