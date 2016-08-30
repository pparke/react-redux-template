/* index.jsx */

import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux'
import {createStore} from 'redux';
import appReducer from './redux/reducers';

/* components */
import App from './components/App.jsx';

/* store */
let store = createStore(appReducer);

// render the app
render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);
