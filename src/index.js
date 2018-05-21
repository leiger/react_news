import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.scss';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
