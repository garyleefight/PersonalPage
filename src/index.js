import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Album from './component/Album'
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<Album />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
