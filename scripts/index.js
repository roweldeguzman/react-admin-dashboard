import React from 'react';
import ReactDOM from 'react-dom';

import Applayout from './App';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'material-design-iconic-font/dist/css/material-design-iconic-font.min.css'
import "./style/app.scss";


/* Waves */
import "./vendors/Waves/waves.min.js"
import "./vendors/Waves/waves.min.css"
/* Sparkline */
import "./vendors/sparklines/jquery.sparkline.min.js";
/* perfect-scrollbar  */
import "perfect-scrollbar/css/perfect-scrollbar.css"

ReactDOM.render(
  <Applayout />,
  document.getElementById('root')
);
registerServiceWorker();