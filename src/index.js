import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

ReactDOM.render(<App />, document.getElementById('app-container'));

serviceWorker.unregister();
