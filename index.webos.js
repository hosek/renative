import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/app';
import { Api } from './src/renative';
import { WEBOS, FORM_FACTOR_TV, PLATFORM_GROUP_SMARTTV, registerServiceWorker } from './src/renative';

Api.platform = WEBOS;
Api.formFactor = FORM_FACTOR_TV;
Api.platformGroup = PLATFORM_GROUP_SMARTTV;

ReactDOM.render(React.createElement(App), document.getElementById('root'));
registerServiceWorker();
