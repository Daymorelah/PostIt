
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import {render} from 'react-dom';
import configureStore from './store/configuerStore.jsx';
import AppsRoutes from './routes.jsx';

const store = configureStore();

render(
  <Provider store={store}>
    <BrowserRouter>
      <AppsRoutes/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);