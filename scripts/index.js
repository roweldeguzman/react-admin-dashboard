import React from 'react';
import ReactDOM from 'react-dom';

import Applayout from './App';
import registerServiceWorker from './registerServiceWorker';

import "./style/app.scss";

ReactDOM.render(<Applayout />,document.getElementById('root'));
registerServiceWorker();