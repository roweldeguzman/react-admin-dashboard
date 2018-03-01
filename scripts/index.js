import React from 'react';
import ReactDOM from 'react-dom';

import Applayout from './App';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'material-design-iconic-font/dist/css/material-design-iconic-font.min.css'
import "./style/app.scss";


ReactDOM.render(
  <Applayout />,
  document.getElementById('root')
);
registerServiceWorker();