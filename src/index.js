import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ThemeContext from './ThemeContext';

ReactDOM.render(
  <ThemeContext.Provider value='pink'>
    <App />
  </ThemeContext.Provider>,
  document.getElementById('root')
);
