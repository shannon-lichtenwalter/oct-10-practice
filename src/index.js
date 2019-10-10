import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import FILES from './FILES';

ReactDOM.render(<App files={FILES} />, document.getElementById('root'));