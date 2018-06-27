import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import store from './Store/configStore';
import TabComponent from './Component/WhatsApp';

ReactDOM.render(
  <Provider store={store}>
  <TabComponent />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
