import React from 'react';
import ReactDOM from 'react-dom';

// styles
import './styles/main.scss';
import './styles/vendor/antd-customized.less';

// internal
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
